import BaseSectionDefinition from './BaseSectionDefinition'
import { MULTI_ROW_SECTION } from './constants/sectionTypes'

/**
 * A section with multiple rows. This section has no defined functionality. The data is just
 * transfered to the data model when the data is generated. It is used to add attributes to test cases.
 * @extends BaseSectionDefinition
 */
export default class MultiRowSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)

    this.sectionType = MULTI_ROW_SECTION

    /** Stores the 'key' entries by there there rowID */
    this.keys = {}

    /** Stores the 'comment' entries by there there rowID */
    this.comments = {}

    /** Stores the 'other' entries by there there rowID */
    this.others = {}
  }

  /**
   * Validates this section definition.
   * - each key field must exists
   * - the key values should be unique
   * @return issues {array} An array of issues found
   */
  validate() {
    const issues = super.validate()

    // used to check for double values
    const helper = {}

    this.dataRows.forEach(rowId => {
      if (this.keys[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The key fields must exists',
          rowId,
          level: 'ERROR',
        })
      } else if (helper[this.keys[rowId]] !== undefined) {
        // double key detected.
        issues.push({
          section: this,
          type: 'definition',
          message: `The key value '${this.keys[rowId]}' is double to line '${
            helper[this.keys[rowId]]
          }'`,
          row: rowId,
          level: 'WARNING',
        })
      } else {
        helper[this.keys[rowId]] = rowId
      }
    })

    return issues
  }
}
