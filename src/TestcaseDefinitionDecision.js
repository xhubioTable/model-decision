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
 * A test case is one column in the test case part. This is the implementation for the decision table.
 * @extends TestcaseDefinitionInterface
 */
export default class TestcaseDefinitionDecision extends TestcaseDefinitionInterface {
  constructor(opts = {}) {
    super(opts)

    // the name of this testcase
    this._name = opts.name

    /** Defines if this testcase is included into the completness computation */
    this.isPartOfCompletion = true

    // Should this test case be executed or is it only for a reference
    this._execute = true

    /** The data of this test case */
    this.data = opts.data || {}
  }

  /**
   * Clone the current testcase definition.
   * @return {object} A clone of this test case definition.
   */
  clone() {
    const newTd = new TestcaseDefinitionDecision({
      ...this,
    })

    newTd._execute = this._execute
    newTd._neverExecute = this._neverExecute
    newTd._name = this._name
    newTd.isPartOfCompletion = this.isPartOfCompletion

    return newTd
  }

  /**
   * Should this test case be executed or is it only for a reference
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
    if (this._name !== undefined) {
      return String(this._name)
    }
  }

  set name(name) {
    this._name = name
  }

  /**
   * Returns all the tags found in this test case
   * @return tags {array} An Array with all the found tags
   */
  createTags() {
    const tags = []

    for (const sectionRowId of this.table.sectionOrder) {
      const section = this.table.sections[sectionRowId]
      if (section.sectionType === sectionTypes.TAG_SECTION) {
        const rowIds = section.dataRows

        rowIds.forEach((dataRowId) => {
          const val = this.data[dataRowId]
          if (val !== undefined) {
            const tag = section.tags[dataRowId]
            tags.push(tag)
          }
        })
      }
    }
    return tags
  }

  /**
   * Returns all the filter found in this test case
   * @return filter {array} An Array with all the found filter
   */
  createFilter() {
    const filter = []

    for (const sectionRowId of this.table.sectionOrder) {
      const section = this.table.sections[sectionRowId]
      if (section.sectionType === sectionTypes.FILTER_SECTION) {
        const rowIds = section.dataRows

        rowIds.forEach((dataRowId) => {
          const val = this.data[dataRowId]
          if (val !== undefined) {
            const filterProcessorName = section.filterProcessorNames[dataRowId]
            const expression = section.expressions[dataRowId]
            const comment = section.comments[dataRowId]
            filter.push({ filterProcessorName, expression, comment })
          }
        })
      }
    }

    return filter
  }

  /**
   * Returns a list of generator names which should not be executed
   * @return generatorNames {array} An Array with alle the generator names to be switched off for this test case
   */
  createGeneratorSwitches() {
    const generatorNames = []

    for (const sectionRowId of this.table.sectionOrder) {
      const section = this.table.sections[sectionRowId]
      if (section.sectionType === sectionTypes.GENERATOR_SWITCH_SECTION) {
        const rowIds = section.dataRows

        for (const dataRowId of rowIds) {
          const val = this.data[dataRowId]
          const valueElement = section.values[dataRowId]
          if (val !== undefined && this._isTrue(valueElement)) {
            const genName = section.generatorNames[dataRowId]
            generatorNames.push(genName)
          }
        }
      }
    }
    return generatorNames
  }

  /**
   * Checks if the given string contains a valid true value
   * @param val {string} The expression to check
   * @return res {boolean} TRUE if the value is a valid boolean true value.
   */
  _isTrue(val) {
    if (typeof val === 'string') {
      const expression = val.toUpperCase()
      if (
        expression === 'T' ||
        expression === 'TRUE' ||
        expression === 'YES' ||
        expression === 'Y' ||
        expression === 'JA' ||
        expression === 'J' ||
        expression === '1'
      ) {
        return true
      }
    }
    return false
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
    for (const sectionRowId of this.table.sectionOrder) {
      const section = this.table.sections[sectionRowId]
      // For this section we need to call the generator or the reference
      if (section.sectionType === sectionTypes.FIELD_SECTION) {
        // we need to iterate the subSections
        for (const subSectionId of section.dataRows) {
          // const sectionName = section.name
          const subSection = section.subSections[subSectionId]
          const { generatorCmd, key } =
            this._getGeneratorCommandForSubSection(subSection)

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
              `No Generator data for table '${this.tableName}' and field '${subSection.name}' for test case '${this.name}'`
            )
          }
        }
      } else if (section.sectionType === sectionTypes.MULTI_ROW_SECTION) {
        // This section only adds meta data to the testcase
        const todoList = this._createMultirowSectionTodo(section)
        for (const todo of todoList) {
          todos.meta.push(todo)
        }
      }
    }

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
    rowIds.forEach((dataRowId) => {
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
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.name,
      generatorName,
      config,
      instanceIdSuffix,
      meta: {
        equivalenceClass: subSection.equivalenceClasses[key],
        comment: subSection.comments[key],
      },
      testcaseMeta: this.metaInformation,
    })

    return todo
  }

  /**
   * Creates a reference todo
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

    // @link Removed, because a it works
    // if (
    //   targetTestcaseName !== undefined &&
    //   targetTestcaseName.startsWith('[') &&
    //   targetFieldName !== undefined &&
    //   targetFieldName !== ''
    // ) {
    //   this.logger.error({
    //     function: '_createReferenceTodo',
    //     message: `If a test case range is given, the 'targetFieldName' must be null`,
    //     referenceCmd: generatorCmd,
    //     table: this.table.name,
    //     testCaseName: this.name,
    //   })
    // }

    // @link Removed, because a self reference must not have a test case name
    // if (targetTestcaseName === undefined) {
    //   this.logger.error({
    //     function: '_createReferenceTodo',
    //     message: 'The target test case name must not be empty',
    //     referenceCmd: generatorCmd,
    //     table: this.table.name,
    //     testCaseName: this.name,
    //   })
    //   throw new Error('References: missing test case name')
    // }

    const todo = new TodoReference({
      fieldName: subSection.name,
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.name,
      targetTableName,
      targetFieldName,
      targetTestcaseName,
      instanceIdSuffix,
      meta: {
        equivalenceClass: subSection.equivalenceClasses[key],
        comment: subSection.comments[key],
      },
      testcaseMeta: this.metaInformation,
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
      tableName: this.tableName,
      tableType: this.tableType,
      testcaseName: this.name,
      value: generatorCmd,
      meta: {
        equivalenceClass: subSection.equivalenceClasses[key],
        comment: subSection.comments[key],
      },
      testcaseMeta: this.metaInformation,
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

    rowIds.forEach((dataRowId) => {
      const val = this.data[dataRowId]
      if (val !== undefined) {
        const meta = {
          key: section.keys[dataRowId],
          comment: section.comments[dataRowId],
          other: section.others[dataRowId],
        }
        const todo = new TodoMeta({
          fieldName: section.name,
          tableName: this.tableName,
          tableType: this.tableType,
          testcaseName: this.name,
          meta,
          testcaseMeta: this.metaInformation,
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
    rowIds.forEach((rowId) => {
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
    section.dataRows.forEach((rowId) => {
      if (this.data[rowId] !== undefined) {
        counter++
      }
    })

    if (section.mandatory && counter === 0) {
      // error values missing
      issues.push({
        section,
        type: 'testcase value',
        message: `The testcase '${this.name}' has no value defined for the section '${section.name}'`,
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
        message: `The testcase '${this.name}' has too many values defined for the section '${section.name}'`,
        level: 'ERROR',
        row: section.headerRow,
        column: this.id,
      })
    }

    return issues
  }
}
