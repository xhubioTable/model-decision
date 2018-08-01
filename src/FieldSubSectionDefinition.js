'use strict'

import BaseSectionDefinition from './BaseSectionDefinition'
import { FIELD_SUB_SECTION } from './constants/sectionTypes'

/**
 * The sub section defines all the equivalenz classes for one field
 */
export default class FieldSubSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)

    this.sectionType = FIELD_SUB_SECTION

    // Store the equivalenz class entries by there rowID
    this.equivalenceClasses = {}

    // stores the comments by there there rowID
    this.comments = {}

    // stores the data generator entries by there there rowID
    this.tdgs = {}

    // if set to a true value, the tdg fields must not be empty
    this.tdgMandatory = false
    this.mandatory = true

    // The id of the parentSection
    this.parent = undefined

    if (opts !== undefined) {
      if (opts.mandatory !== undefined) {
        this.mandatory = opts.mandatory
      }
      if (opts.tdgMandatory !== undefined) {
        this.tdgMandatory = opts.tdgMandatory
      }
      if (opts.parent !== undefined) {
        this.parent = opts.parent
      }
    }
  }

  /**
   * Validates this section definition.
   * - The equivalenceClasses must not be empty
   * - The equivalenceClasses must be unique
   * If tdg is mandatory it must also be checked
   * @return issues {array} An array of issues found
   */
  validate() {
    const issues = super.validate()

    // used to check for double values
    const helper = {}

    this.dataRows.forEach(rowId => {
      if (this.tdgMandatory && this.tdgs[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The tdg fields must must not be empty',
          rowId,
          level: 'ERROR',
        })
      }

      if (this.equivalenceClasses[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The equivalenceClasses fields must must not be empty',
          rowId,
          level: 'ERROR',
        })
      } else if (helper[this.equivalenceClasses[rowId]] !== undefined) {
        // double key detected.
        issues.push({
          section: this,
          type: 'definition',
          message: `The key value '${
            this.equivalenceClasses[rowId]
          }' is double to line '${helper[this.equivalenceClasses[rowId]]}'`,
          rowId,
          level: 'WARNING',
        })
      } else {
        helper[this.equivalenceClasses[rowId]] = rowId
      }
    })

    return issues
  }
}
