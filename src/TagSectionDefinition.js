'use strict'

import BaseSectionDefinition from './BaseSectionDefinition'
import { TAG_SECTION } from './constants/sectionTypes'

/**
 * A section with multiple rows
 * Allows to add tags to test cases. Later on you can filter on these tags
 */
export default class TagSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)

    this.sectionType = TAG_SECTION

    // stores the tag entries by there there rowID
    this.tags = {}

    // stores the comments by there there rowID
    this.comments = {}

    // stores the 'other' entries by there there rowID
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
      if (this.tags[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The tag fields must exists',
          rowId,
          level: 'ERROR',
        })
      } else if (helper[this.tags[rowId]] !== undefined) {
        // double key detected.
        issues.push({
          section: this,
          type: 'definition',
          message: `The tag value '${this.tags[rowId]}' is double to line '${
            helper[this.tags[rowId]]
          }'`,
          row: rowId,
          level: 'WARNING',
        })
      } else {
        helper[this.tags[rowId]] = rowId
      }
    })

    return issues
  }
}
