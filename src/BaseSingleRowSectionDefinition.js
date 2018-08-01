'use strict'

import BaseSectionDefinition from './BaseSectionDefinition'
import { BASE_SECTION } from './constants/sectionTypes'

/**
 * The summary section stores the calculations for the table
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
   * This kind of section is its own data row
   */
  get dataRows() {
    return [this.headerRow]
  }

  // eslint-disable-next-line no-unsed-vars
  set dataRows(rowId) {
    // do nothing
  }
}
