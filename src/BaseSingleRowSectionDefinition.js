import BaseSectionDefinition from './BaseSectionDefinition'
import { BASE_SECTION } from './constants/sectionTypes'

/**
 * A single row section is a section which consists of only one row.
 * All the existing single row sections inherits from this section.
 * @extends BaseSectionDefinition
 */
export default class BaseSingleRowSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = BASE_SECTION
    this.mandatory = false
    this.multiple = false
    this.multiInstancesAllowed = false
    delete this.dataRows
  }

  /**
   * This kind of section is its own data row.
   * @return {array} Returns an array of rowIds, In this case only one.
   */
  get dataRows() {
    return [this.headerRow]
  }

  // eslint-disable-next-line no-unused-vars
  set dataRows(rowId) {
    // do nothing
  }
}
