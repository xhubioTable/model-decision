'use strict'

import BaseSingleRowSectionDefinition from './BaseSingleRowSectionDefinition'
import { MULTIPLICITY_SECTION } from './constants/sectionTypes'

/**
 * This section defines how many test cases should be created from one test case
 * in the table. The default is one. If the value given is '0' Then no test case
 * will be created. Is for example the value is '5' then five instances of this
 * test case definition will be created.
 */
export default class MultiplicitySectionDefinition extends BaseSingleRowSectionDefinition {
  constructor(opts) {
    super(opts)
    this.sectionType = MULTIPLICITY_SECTION
  }
}
