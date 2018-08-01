'use strict'

import BaseSectionDefinition from './BaseSectionDefinition'
import FieldSubSectionDefinition from './FieldSubSectionDefinition'
import { FIELD_SECTION } from './constants/sectionTypes'

/**
 * A field section holds all the fields.
 */
export default class FieldSectionDefinition extends BaseSectionDefinition {
  constructor(opts) {
    super(opts)

    this.sectionType = FIELD_SECTION

    // The section definitions stored by there id
    // All the sub sections
    this.subSections = {}

    this.tdgMandatory = false
    this.mandatory = true

    if (opts !== undefined) {
      if (opts.mandatory !== undefined) {
        this.mandatory = opts.mandatory
      }
      if (opts.tdgMandatory !== undefined) {
        this.tdgMandatory = opts.tdgMandatory
      }
    }
  }

  /**
   * Validates this section definition.
   * - A fieldSection must have at least one subSection
   * @return issues {array} An array of issues found
   */
  validate() {
    const issues = super.validate()

    if (this.dataRows.length === 0) {
      issues.push({
        section: this,
        type: 'definition',
        message: 'A fieldSection needs at least one sub section',
        level: 'ERROR',
      })
    } else {
      // iterate the subSections
      this.dataRows.forEach(rowId => {
        const subSectionDefinition = this.subSections[rowId]
        subSectionDefinition.validate()
      })
    }
    return issues
  }

  /**
   * Creates a new row for this section.
   * generates a new UUID and add it to the row array.
   * @return id {string} The new created row id
   */
  createNewRow() {
    return this.createNewField()
  }

  /**
   * Adds a new empty field
   * @return subSection {string} The new created sub section
   */
  createNewField() {
    const field = new FieldSubSectionDefinition()
    const id = field.headerRow
    this.subSections[id] = field
    this.dataRows.push(id)
    field.parent = this.headerRow
    return field
  }
}
