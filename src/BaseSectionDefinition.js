import { v4 as uuidv4 } from 'uuid'
import { BASE_SECTION } from './constants/sectionTypes'

/**
 * Base class for all the sections used in the decision table.
 * A decision table is devided in different sections.
 * Each section has different funktionality.
 */
export default class BaseSectionDefinition {
  constructor(opts = {}) {
    /** The type of a section. To be overwrite by a sub class. */
    this.sectionType = BASE_SECTION

    /** The name of this section. */
    this.name = opts.name

    /** Defines if the section must have at least one value. */
    this.mandatory = false

    /** defines if this section may have more than one row. */
    this.multiple = true

    /** This id is used to identify a row or section in the model.
     * All rows and columns are identified by auch an id.
     */
    this.headerRow = uuidv4()

    /** Stores the IDs of the data rows. Not the rows itself. */
    this.dataRows = []

    /** If set to false only one section of this type is allowed per model. */
    this.multiInstancesAllowed = true
  }

  /**
   * Returns true if the given row id is from a header row.
   */
  isHeader(id) {
    return this.headerRow === id
  }

  /**
   * Creates a new row for this section.
   * Generates a new UUID and add it to the row array.
   * @return id {string} The new created row id
   */
  createNewRow() {
    if (this.multiple) {
      const id = uuidv4()
      this.dataRows.push(id)
      return id
    }

    throw new Error('This section could not have any data row')
  }

  /**
   * Return an array with all the row IDs of this section.
   * @return ids {array} An array of row ids
   */
  getRowIds() {
    if (this.multiple) {
      return [this.headerRow, ...this.dataRows]
    }
    return [this.headerRow]
  }

  /**
   * Validates this section definition.
   * Checks that the name of the section exists.
   * @return issues {array} An array of issues found
   */
  validate() {
    const issues = []

    if (this.name === undefined) {
      const issue = {
        section: this,
        type: 'definition',
        message: 'The section has no name',
        level: 'ERROR',
      }
      issues.push(issue)
    }
    return issues
  }
}
