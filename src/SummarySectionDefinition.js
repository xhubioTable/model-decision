'use strict'

import BaseSectionDefinition from './BaseSectionDefinition'
import { SUMMARY_SECTION } from './constants/sectionTypes'

/**
 * The summary section stores the calculations for the table
 */
export default class SummarySectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = SUMMARY_SECTION

    // the amount of all test combinations
    this.total = undefined

    // the amount of done test combinations
    this.done = undefined

    // the amount of done test combinations in percent
    this.percent = undefined

    delete this.mandatory
    // delete this.dataRows;

    this.multiInstancesAllowed = false
  }

  /**
   * Creates a new row for this section.
   * generates a new UUID and add it to the row array.
   * @return id {string} The new created row id
   */
  createDataRow() {
    return undefined
  }

  /**
   * Return an array with all the row IDs of this section.
   * @return ids {array} An array of row ids
   */
  getRowIds() {
    return [this.headerRow]
  }
}
