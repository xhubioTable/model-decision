import assert from 'assert'

import * as sectionTypes from './constants/sectionTypes'

import {
  TestcaseDefinitionInterface,
  TodoMeta,
  TodoGenerator,
  TodoReference,
  TodoStatic,
} from '@xhubiotable/model'

/**
 * A test case is one column in the test case part
 */
export default class TestcaseDefinition extends TestcaseDefinitionInterface {
  constructor(opts = {}) {
    super(opts)

    // the name of this testcase
    this._name = opts.name

    // if true, than the testcase is included into the completness computation
    this.isPartOfCompletion = true

    // Should this test case be executed or is it ony for a refernce
    this._execute = true

    this.data = opts.data || {}
  }

  /**
   * Clone the current testcase definition
   */
  clone() {
    const newTd = new TestcaseDefinition({
      ...this,
    })

    newTd._execute = this._execute
    newTd._name = this._name
    newTd.isPartOfCompletion = this.isPartOfCompletion

    return newTd
  }

  /**
   * Should this test case be executed or is it only for a refernce
   */
  get execute() {
    return this._execute
  }
  set execute(execute) {
    this._execute = execute
  }

  /**
   * The name of this testcase. With this name the
   * testcase could be found in the table
   */
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name
  }

  get tableType() {
    if (this.table) {
      return this.table.tableType
    }
  }

  /**
   * Create all the todos for this testcase definition
   * const todos = {
   *   generators :[genTodo,],
   *   references: [refTodo,],
   *   static: [staticData],
   * }
   * @return todos {object} An object with all the todos by there type
   */
  createTodos() {
    const todos = {
      generator: [],
      static: [],
      reference: [],
      meta: [],
    }

    // -------------------------------------------
    // Fills the node with:
    // - generator commands
    // - static values
    // - references
    // - meta data
    // -------------------------------------------
    this.table.sectionOrder.forEach(sectionRowId => {
      const section = this.table.sections[sectionRowId]
      // For this section we need to call the generator or the reference
      if (section.sectionType === sectionTypes.FIELD_SECTION) {
        // we need to iterate the subSections
        section.dataRows.forEach(subSectionId => {
          // const sectionName = section.name
          const subSection = section.subSections[subSectionId]
          const { generatorCmd, key } = this._getGeneratorCommandForSubSection(
            subSection
          )

          if (
            generatorCmd !== undefined &&
            generatorCmd.toLowerCase().startsWith('gen:')
          ) {
            const todo = this._createGeneratorTodo(
              subSection,
              generatorCmd,
              key
            )
            todos.generator.push(todo)
          } else if (
            generatorCmd !== undefined &&
            generatorCmd.toLowerCase().startsWith('ref:')
          ) {
            const todo = this._createReferenceTodo(
              subSection,
              generatorCmd,
              key
            )
            todos.reference.push(todo)
          } else if (generatorCmd !== undefined) {
            const todo = this._createStaticValueTodo(
              subSection,
              generatorCmd,
              key
            )
            todos.static.push(todo)
          } else {
            this.logger.info(
              `No Generator data for table '${this.table.name}' and field '${
                subSection.name
              }' for test case '${this.name}'`
            )
          }
        })
      } else if (section.sectionType === sectionTypes.MULTI_ROW_SECTION) {
        // This section only adds meta data to the testcase
        const todoList = this._createMultirowSectionTodo(section)
        for (const todo of todoList) {
          todos.meta.push(todo)
        }
      }
    })

    return todos
  }

  /**
   * Gets the generator command for a FieldSubSection
   * @param subSection {object} The FieldSubSection
   * @return generatorCmd {string} The generator command from the sub section
   */
  _getGeneratorCommandForSubSection(subSection) {
    const rowIds = subSection.dataRows

    // a subsection could have more than one entry.
    // later on we need to randomly extract one of them
    const dataSetE = {}
    const dataSetA = {} // if the value is an 'a' this means prefered value
    rowIds.forEach(dataRowId => {
      const val = this.data[dataRowId]
      if (val !== undefined && val.toLowerCase() !== 'i') {
        if (val.toLowerCase() === 'a') {
          dataSetA[dataRowId] = val
        } else {
          dataSetE[dataRowId] = val
        }
      }
    })

    // get a list of the possible candidates
    const dataSetKeysA = Object.keys(dataSetA)
    const dataSetKeysE = Object.keys(dataSetE)

    let dataSetKeys
    if (dataSetKeysA.length > 0) {
      dataSetKeys = dataSetKeysA
    } else {
      dataSetKeys = dataSetKeysE
    }

    const idx = Math.floor(Math.random() * dataSetKeys.length)
    const key = dataSetKeys[idx]
    const generatorCmd = subSection.tdgs[key]

    return { generatorCmd, key }
  }

  /**
   * Creates the generator todo
   * @param subSection {object} The current FieldSubSection
   * @param generatorCmd {string} The generator command
   * @param key {string} The key of the value in the subSection
   * @return todo {object} A generator Todo
   */
  _createGeneratorTodo(subSection, generatorCmd, key) {
    const parts = generatorCmd.split(':')
    parts.shift()
    const instanceIdSuffix = parts.shift()
    const generatorName = parts.shift()
    const config = parts.join(':')

    const todo = new TodoGenerator({
      fieldName: subSection.name,
      tableName: this.table.name,
      tableType: this.table.tableType,
      testcaseName: this.name,
      generatorName,
      config,
      instanceIdSuffix,
      meta: {
        equivalenceClass: subSection.equivalenceClasses[key],
        comment: subSection.comments[key],
      },
    })

    return todo
  }

  /**
   * Creates a refernce todo
   * @param subSection {object} The current FieldSubSection
   * @param generatorCmd {string} The reference command
   * @param key {string} The key of the value in the subSection
   */
  _createReferenceTodo(subSection, generatorCmd, key) {
    const parts = generatorCmd.split(':')
    const instanceIdSuffix = parts[1]
    // self references may have no table name
    const targetTableName = parts[2] || this.table.name
    const targetFieldName = parts[3]
    const targetTestcaseName = parts[4]

    if (targetTestcaseName === undefined) {
      this.logger.error({
        function: '_createReferenceTodo',
        message: 'The target test case name must not be empty',
        referenceCmd: generatorCmd,
        table: this.table.name,
        testCaseName: this.name,
      })
      throw new Error('References: missing test case name')
    }

    const todo = new TodoReference({
      fieldName: subSection.name,
      tableName: this.table.name,
      tableType: this.table.tableType,
      testcaseName: this.name,
      targetTableName,
      targetFieldName,
      targetTestcaseName,
      instanceIdSuffix,
      meta: {
        equivalenceClass: subSection.equivalenceClasses[key],
        comment: subSection.comments[key],
      },
    })

    return todo
  }

  /**
   * Creates the todo for static values
   * @param subSection {object} The current FieldSubSection
   * @param generatorCmd {string} The generator command
   * @param key {string} The key of the value in the subSection
   * @return todo {object} A static Todo
   */
  _createStaticValueTodo(subSection, generatorCmd, key) {
    const todo = new TodoStatic({
      fieldName: subSection.name,
      tableName: this.table.name,
      tableType: this.table.tableType,
      testcaseName: this.name,
      value: generatorCmd,
      meta: {
        equivalenceClass: subSection.equivalenceClasses[key],
        comment: subSection.comments[key],
      },
    })

    return todo
  }

  /**
   * Create a meta todo
   * @param section {object} The current multiRowSection
   * @return todos {array} Aa array of meta Todos
   */
  _createMultirowSectionTodo(section) {
    const rowIds = section.dataRows
    const todos = []

    rowIds.forEach(dataRowId => {
      const val = this.data[dataRowId]
      if (val !== undefined) {
        const meta = {
          key: section.keys[dataRowId],
          comment: section.comments[dataRowId],
          other: section.others[dataRowId],
        }
        const todo = new TodoMeta({
          fieldName: section.name,
          tableName: this.table.name,
          tableType: this.table.tableType,
          testcaseName: this.name,
          meta,
        })
        todos.push(todo)
      }
    })

    return todos
  }

  /**
   * Claculates how many entries per section are defined
   * @param sectionRowId {string} The id of the section containing these rows
   * @param rowIds {array} All the arrays of this section
   * @return count {number} The number of entries
   */
  calculate(sectionRowId, rowIds) {
    let count = 0
    rowIds.forEach(rowId => {
      if (this.data[rowId] !== undefined) {
        count++
      }
    })

    this.data[sectionRowId] = count
    return count
  }

  /**
   * Set a value for a row in this testcase
   * @param rowId {string} The rowId for this value
   * @param value {string} The value to be set
   */
  setValue(rowId, value) {
    assert(rowId !== undefined)

    if (value === undefined) {
      // delete the value
      delete this.data[rowId]
    } else {
      // set a value
      this.data[rowId] = value
    }
  }

  /**
   * Set a value for a row in this testcase
   * @param rowId {string} The rowId for this value
   * @return value {string} The value of this row id
   */
  getValue(rowId) {
    assert(rowId !== undefined)
    return this.data[rowId]
  }

  /**
   * Validates this section definition.
   * - A testcase must have a name
   * - A fieldSection must have at least one subSection
   * - If mandatory = true for a section, it must have at least one entry
   * - if multiple = false it must have only one entry per section
   * @param section {object} The section to be validated
   * @return issues {array} An array of issues found
   */
  validate(section) {
    assert(section !== undefined)

    const issues = []

    if (this.name === undefined) {
      issues.push({
        testcase: this,
        type: 'testcase',
        message: 'The testcase has no name',
        level: 'ERROR',
      })
    }

    // count how many rows of this section have a value
    let counter = 0
    section.dataRows.forEach(rowId => {
      if (this.data[rowId] !== undefined) {
        counter++
      }
    })

    if (section.mandatory && counter === 0) {
      // error values missing
      issues.push({
        section,
        type: 'testcase value',
        message: `The testcase '${
          this.name
        }' has no value defined for the section '${section.name}'`,
        level: 'ERROR',
        row: section.headerRow,
        column: this.id,
      })
    }

    if (!section.multiple && counter > 1) {
      // error too many values
      issues.push({
        section,
        type: 'testcase value',
        message: `The testcase '${
          this.name
        }' has too many values defined for the section '${section.name}'`,
        level: 'ERROR',
        row: section.headerRow,
        column: this.id,
      })
    }

    return issues
  }
}
