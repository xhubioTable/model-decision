'use strict'

import uuid from 'uuid'
import { BASE_SECTION } from './constants/sectionTypes'

const uuidV4 = uuid.v4

/**
 * Base class for all the sections.
 */
export default class BaseSectionDefinition {
  constructor(opts = {}) {
    // overwrite by sub class
    this.sectionType = BASE_SECTION

    // The name of this section
    this.name = opts.name

    // defines if the section must have at least one value
    this.mandatory = false

    // defines if this section may have more than one row
    this.multiple = true

    // This id is used to identify a row or section in the model.
    // All rows and columns are identified by auch an id.
    this.headerRow = uuidV4()

    // stores the IDs of the data rows. Not the rows itself.
    this.dataRows = []

    // If set to false only one of this sections is allowed per model
    this.multiInstancesAllowed = true
  }

  /**
   * Returns true if the given row id is from a header row
   */
  isHeader(id) {
    return this.headerRow === id
  }

  /**
   * Creates a new row for this section.
   * generates a new UUID and add it to the row array.
   * @return id {string} The new created row id
   */
  createNewRow() {
    if (this.multiple) {
      const id = uuidV4()
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
   * - Name must exists
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
