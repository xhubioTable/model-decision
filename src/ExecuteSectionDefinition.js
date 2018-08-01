'use strict'

import BaseSingleRowSectionDefinition from './BaseSingleRowSectionDefinition'
import { EXECUTE_SECTION } from './constants/sectionTypes'

/**
 * This sections defines if a test case should be created or if the
 * test case definition is only a source for a reference.
 */
export default class ExecuteSectionDefinition extends BaseSingleRowSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = EXECUTE_SECTION
  }
}
