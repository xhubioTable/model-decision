import BaseSectionDefinition from './BaseSectionDefinition'
import { GENERATOR_SWITCH_SECTION } from './constants/sectionTypes'

/**
 * A FilterSection is used to filter test cases when the data generator creates the data out of
 * theses tables.
 * @extends BaseSectionDefinition
 */
export default class GeneratorSwitchSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)

    this.sectionType = GENERATOR_SWITCH_SECTION

    /** Stores the names of the filter processors by there row id */
    this.generatorNames = {}

    /** Stores the filter expressions by there rowId */
    this.values = {}

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

    this.dataRows.forEach(rowId => {
      if (this.generatorNames[rowId] === undefined) {
        issues.push({
          section: this,
          type: 'definition',
          message: 'The generatorNames fields must exists',
          rowId,
          level: 'ERROR',
        })
      } else {
        helper[this.generatorNames[rowId]] = rowId
      }
    })

    return issues
  }
}
