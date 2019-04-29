import assert from 'assert'

import { TableInterface } from '@xhubiotable/model'

import FieldSectionDefinition from './FieldSectionDefinition'
import MultiRowSectionDefinition from './MultiRowSectionDefinition'
import TagSectionDefinition from './TagSectionDefinition'
import FilterSectionDefinition from './FilterSectionDefinition'
import SummarySectionDefinition from './SummarySectionDefinition'
import MultiplicitySectionDefinition from './MultiplicitySectionDefinition'
import ExecuteSectionDefinition from './ExecuteSectionDefinition'
import NeverExecuteSectionDefinition from './NeverExecuteSectionDefinition'

import TestcaseDefinitionDecision from './TestcaseDefinitionDecision'
import { FIELD_SECTION, SUMMARY_SECTION } from './constants/sectionTypes'

export const TABLE_TYPE = 'decision-table'

/**
 * The table implementation for a decision table.
 * @extends TableInterface
 */
export class TableDecision extends TableInterface {
  constructor(opts = {}) {
    super(opts)

    /** The order of test cases. A list of test case ids */
    this.testcaseOrder = []

    /** Stores the testcases by there id */
    this.testcases = {}

    /** The section definitions stored by there id */
    this.sections = {}

    /** The order of the sections. A list of section ids */
    this.sectionOrder = []

    /**
     * This map is used to verify if sections which must only exists once are
     * used more often. The map stores the sections by there sectionType.
     */
    this.singleCheck = new Map()

    /**
     * Stores all the section names per type. This is
     * only to make sure that a section name is not used twice per table.
     * The value is `${sectionType}-${sectionName}`
     * Per type the name must be unique
     */
    this.sectionNames = new Set()
  }

  /**
   * Stores the type of the table
   * @return {string} The type of this table.
   */
  get tableType() {
    return TABLE_TYPE
  }

  /**
   * Returns the testcase for the given name. If not found it will throw an exception
   * @param testcaseName {string} The name of the testcase
   * @return testcaseDefinition {object} returns the testcase definition
   */
  getTestcaseForName(testcaseName) {
    for (const tcId of this.testcaseOrder) {
      const tc = this.testcases[tcId]
      if (String(tc.name) === String(testcaseName)) {
        return tc
      }
    }

    throw new Error(
      `Could not find the testcase '${testcaseName}' in the table '${
        this.name
      }'`
    )
  }

  /**
   * This generator returns all the testcases which should be executed
   * @generator
   * @yields {testcaseDefinitionInterface}
   */
  *getTestcasesForExecution() {
    for (const testcaseId of this.testcaseOrder) {
      const testcaseDefinition = this.testcases[testcaseId]
      if (testcaseDefinition.execute) {
        // This is used if the user want many of this testcases created
        // Default value is '1'

        for (let i = 0; i < testcaseDefinition.multiplicity; i++) {
          const td = testcaseDefinition.clone()
          if (testcaseDefinition.multiplicity > 1) {
            // In this case we need to update the testcase name
            td.name = `${testcaseDefinition.name}.${i + 1}`
          }
          yield td
        }
      }
    }
    return
  }

  /**
   * Parses a testcase name given in a reference. If the name is a range it will return an
   * Array of names. For example the name 'tc12-14' will be expended to:
   * tc12, tc13, tc14
   * @param testcaseName {string} The reference test case name
   * @return tcNames {array} An array of test case names
   */
  processRanges(testcaseName) {
    if (testcaseName.match(/^\[.+\]$/)) {
      const tcNames = []
      const cleanRange = testcaseName.replace(/^\[(.+)\]$/, '$1')
      const elements = cleanRange.split(',')

      const regEx = /(\D*)(\d+)-(\d+)$/
      for (const element of elements) {
        const matches = element.trim().match(regEx)
        if (matches !== null) {
          // This elements itself defines a range
          const startElement = matches[1]
          let startNumber = parseInt(matches[2], 10)
          let endNumber = parseInt(matches[3], 10)

          if (startNumber > endNumber) {
            const tmp = endNumber
            endNumber = startNumber
            startNumber = tmp
          }

          for (let i = startNumber; i <= endNumber; i++) {
            tcNames.push(`${startElement}${i}`)
          }
        } else {
          tcNames.push(element)
        }
      }
      return tcNames
    }
    return [testcaseName]
  }

  /**
   * Calculates the summary for each section.
   * The results will be added to the section rows and to the summary section
   */
  // calculate(sectionRowId, rowIds)
  calculate() {
    let isFirst = true
    let sumAll = 1
    let summarySection
    this.testcaseOrder.forEach(tcId => {
      let summarySectionId // The id of the summary section
      let sum = 1

      const testcase = this.testcases[tcId]

      this.sectionOrder.forEach(sectionRowId => {
        const section = this.sections[sectionRowId]

        if (section.sectionType === FIELD_SECTION) {
          const sectionId = section.headerRow
          let sectionSum = 1
          // we need to iterate the subSections
          section.dataRows.forEach(subSectionId => {
            const subSection = section.subSections[subSectionId]
            const rowIds = subSection.dataRows
            const count = testcase.calculate(sectionId, rowIds)
            sectionSum *= count
            sum *= count
            if (isFirst) {
              sumAll *= rowIds.length
            }

            testcase.data[subSectionId] = count
          })

          testcase.data[sectionId] = sectionSum
        } else if (section.sectionType === SUMMARY_SECTION) {
          summarySectionId = section.headerRow

          if (isFirst) {
            summarySection = section
          }
        }
      })
      assert(summarySectionId !== undefined)
      testcase.data[summarySectionId] = sum

      isFirst = false
    })

    // update the calculation in the summary section
    const summarySectionId = summarySection.headerRow
    let allTestcaseSum = 0
    this.testcaseOrder.forEach(tcId => {
      const testcase = this.testcases[tcId]
      allTestcaseSum += testcase.data[summarySectionId]
    })

    summarySection.total = sumAll
    summarySection.done = allTestcaseSum
    summarySection.percent = (allTestcaseSum / sumAll) * 100
  }

  /**
   * Validates the model. Only field sections are validated.
   * All the validation issues will be returned. The issue
   * has the following format:
   * - A table must have one and only one summary section
   * - A table must have at least one field section
   * - The names of the fields must be unique per table
   * - A table must have at least one testcase
   */
  validate() {
    const issues = []

    if (this.name === undefined) {
      issues.push({
        type: 'tableDecision',
        message: 'The table has no name',
        level: 'ERROR',
      })
    }

    const fieldNames = new Set()

    this.sectionOrder.forEach(sectionRowId => {
      const section = this.sections[sectionRowId]

      if (section.sectionType === FIELD_SECTION) {
        // we need to iterate the subSections
        section.dataRows.forEach(subSectionId => {
          const subSection = section.subSections[subSectionId]
          const fieldName = subSection.name
          if (fieldNames.has(fieldName)) {
            issues.push({
              table: this.name,
              type: 'tableDecision',
              message: `The fieldName '${fieldName}' is double in the table '${
                this.name
              }'`,
              level: 'ERROR',
            })
          } else {
            fieldNames.add(fieldName)
          }
          this._validateSection(subSection, issues)
          this._validateTestcase(subSection, issues)
        })
      }

      this._validateSection(section, issues)
      this._validateTestcase(section, issues)
    })

    return issues
  }

  /**
   * Validates a given section and stores the issues in the given array
   * @param section {object} The section to validate
   * @param issues {array} The array to store the found issues
   */
  _validateSection(section, issues) {
    assert(section)
    assert(issues)

    section.validate().forEach(issue => {
      issues.push(issue)
    })
  }

  /**
   * Validates a given testcase for the given section
   * @param section {object} The section to validate
   * @param issues {array} The array to store the found issues
   */
  _validateTestcase(section, issues) {
    this.testcaseOrder.forEach(tcId => {
      const testcase = this.testcases[tcId]
      testcase.validate(section).forEach(issue => {
        issues.push(issue)
      })
    })
  }

  /**
   * Build an internal mapping for rowIds to the objects
   * @param section {object} The section to get the rowIDs from
   */
  _buildSectionRows(section) {
    if (section.sectionType === 'FieldSubSection') {
      this.rowMap[section.headerRow] = {
        type: 'subSection',
        object: section,
        parent: section.parent,
      }
    } else {
      this.rowMap[section.headerRow] = { type: 'section', object: section }
    }
    this.rowOrder.push(section.headerRow)

    if (section.sectionType === 'FieldSection') {
      this.rowMap[section.headerRow] = { type: 'section', object: section }
      section.dataRows.forEach(rowId => {
        const subSection = section.sections[rowId]
        this._buildSectionRows(subSection)
      })
    } else {
      let names = ['keys', 'comments', 'others']
      if (section.sectionType === 'FieldSubSection') {
        names = ['equivalenceClasses', 'tdgs', 'comments']
      }
      section.dataRows.forEach(rowId => {
        const myRow = { type: 'row', parent: section.headerRow }
        let i = 2
        names.forEach(name => {
          myRow['c' + i] = section[name][rowId]
          i++
        })
        this.rowMap[rowId] = myRow
        this.rowOrder.push(rowId)
      })
    }
  }

  /**
   * Adds a generic section and definition to the model
   * @param sectionDefinition {object} The sectionDefinition to be added
   * @param position {integer} The position where to add the section
   */
  _addNewSection(sectionDefinition, position) {
    // validate that the section name is unique
    const key = `${sectionDefinition.sectionType}_${sectionDefinition.name}`
    if (this.sectionNames.has(key)) {
      throw new Error(
        `The name '${sectionDefinition.name}' for the section of type '${
          sectionDefinition.sectionType
        }' is double in the table '${this.name}'`
      )
    } else {
      this.sectionNames.add(key)
    }

    if (!sectionDefinition.multiInstancesAllowed) {
      // This type of section is only allowed to be added once to a table.
      // check if it already exists

      if (this.singleCheck.has(sectionDefinition.sectionType)) {
        throw new Error(
          `The section of type '${
            sectionDefinition.sectionType
          }' must not be added multiple times to the model`
        )
      }
      this.singleCheck.set(sectionDefinition.sectionType, sectionDefinition)
    }

    this._checkParameterAddSection(position)

    // add the section definition
    const id = sectionDefinition.headerRow
    assert(id !== undefined)

    this.sections[id] = sectionDefinition

    // add the name to have a order
    if (position === undefined || position >= this.sectionOrder.length) {
      // add the field to the end of the list
      this.sectionOrder.push(id)
    } else {
      this.sectionOrder.splice(position, 0, id)
    }

    return sectionDefinition
  }

  /**
   * Adds a new testcase to the table. If there are already existing sections these will be added to the testcase
   * @param name {string} The name of the new testcase
   * @param position {integer} (optional) The position where to add the new testcase.
   * @return testcase {object} The created testcase
   */
  addNewTestcase(name, position) {
    const testcase = new TestcaseDefinitionDecision({ name, table: this })

    // add the section definition
    const id = testcase.id
    this.testcases[id] = testcase

    // add the name to have a order
    if (position === undefined || position >= this.testcaseOrder.length) {
      // add the field to the end of the list
      this.testcaseOrder.push(id)
    } else {
      this.testcaseOrder.splice(position, 0, id)
    }

    return testcase
  }

  /**
   * Adds a new FieldSection to the model. For each existing testcase
   * a section will be added.
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewFieldSection(name, position) {
    return this._addNewSection(new FieldSectionDefinition({ name }), position)
  }

  /**
   * Adds a new MultiRowSection to the model. For each existing testcase
   * a section will be added.
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewMultiRowSection(name, position) {
    return this._addNewSection(
      new MultiRowSectionDefinition({ name }),
      position
    )
  }

  /**
   * Adds a new MultiRowSection to the model. For each existing testcase
   * a section will be added.
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewTagSection(name, position) {
    return this._addNewSection(new TagSectionDefinition({ name }), position)
  }

  /**
   * Adds a new MultiRowSection to the model. For each existing testcase
   * a section will be added.
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewFilterSection(name, position) {
    return this._addNewSection(new FilterSectionDefinition({ name }), position)
  }

  /**
   * Adds a new SummarySection to the model. Testcases needs not be updated
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewSummarySection(name, position) {
    return this._addNewSection(new SummarySectionDefinition({ name }), position)
  }

  /**
   * Adds a new ExecuteSection to the model. Testcases needs not be updated
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewExecuteSection(name, position) {
    return this._addNewSection(new ExecuteSectionDefinition({ name }), position)
  }

  /**
   * Adds a new ExecuteSection to the model. Testcases needs not be updated
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewNeverExecuteSection(name, position) {
    return this._addNewSection(
      new NeverExecuteSectionDefinition({ name }),
      position
    )
  }

  /**
   * Adds a new MultiplicitySection to the model. Testcases needs not be updated
   * @param name {string} The name for the new section. The name must not be used before
   * @param position {integer} (optional) The position where to add the new section.
   * @return sectionDefinition {object} The created section definition
   */
  addNewMultiplicitySection(name, position) {
    return this._addNewSection(
      new MultiplicitySectionDefinition({ name }),
      position
    )
  }

  // TODO delete Section. When deleting a single row section it must also be removed from 'this.singleCheck'

  /**
   * validates the parameter for adding a new section
   * @param position {integer} (optional) The position where to add the new section.
   */
  _checkParameterAddSection(position) {
    if (position !== undefined && position < 0) {
      throw new Error(`The parameter position '${position}' must be >= 0`)
    }
  }
}
