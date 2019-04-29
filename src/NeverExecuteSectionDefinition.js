import BaseSingleRowSectionDefinition from './BaseSingleRowSectionDefinition'
import { NEVER_EXECUTE_SECTION } from './constants/sectionTypes'

/**
 * This section could be used to prevent the test case creation if it is referenced
 * by an other test case.
 * @extends BaseSingleRowSectionDefinition
 */
export default class NeverExecuteSectionDefinition extends BaseSingleRowSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = NEVER_EXECUTE_SECTION
  }
}
