import BaseSectionDefinition from './BaseSectionDefinition'
import { SUMMARY_SECTION } from './constants/sectionTypes'

/**
 * The summary section stores the calculations for the table
 * @extends BaseSectionDefinition
 */
export default class SummarySectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = SUMMARY_SECTION

    /** The amount of all test combinations */
    this.total = undefined

    /** The amount of done test combinations */
    this.done = undefined

    /** The percantage of test combinations done */
    this.percent = undefined

    delete this.mandatory
    // delete this.dataRows;

    /** The summary section must exists only once in ad model */
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
