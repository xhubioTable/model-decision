'use strict'

import BaseSingleRowSectionDefinition from './BaseSingleRowSectionDefinition'
import { NEVER_EXECUTE_SECTION } from './constants/sectionTypes'

/**
 * This sections defines if a test case should be created or if the
 * test case definition is only a source for a reference.
 */
export default class NeverExecuteSectionDefinition extends BaseSingleRowSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = NEVER_EXECUTE_SECTION
  }
}
