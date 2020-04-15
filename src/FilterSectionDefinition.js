import BaseSectionDefinition from './BaseSectionDefinition'
import { FILTER_SECTION } from './constants/sectionTypes'

/**
 * A FilterSection is used to filter test cases when the data generator creates the data out of
 * theses tables.
 * @extends BaseSectionDefinition
 */
export default class FilterSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)

    this.sectionType = FILTER_SECTION

    /** Stores the names of the filter processors by there row id */
    this.filterProcessorNames = {}

    /** Stores the filter expressions by there rowId */
    this.expressions = {}

    /** Stores the comment entries by there there rowID */
    this.comments = {}
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

    this.dataRows.forEach((rowId) => {
      if (this.filterProcessorNames[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The filterProcessorNames fields must exists',
          rowId,
          level: 'ERROR',
        })
      } else if (this.expressions[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The expressions field must exists',
          rowId,
          level: 'ERROR',
        })
      } else {
        helper[this.filterProcessorNames[rowId]] = rowId
      }
    })

    return issues
  }
}
