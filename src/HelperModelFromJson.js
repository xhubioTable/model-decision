'use strict'

import jsonfile from 'jsonfile'
import assert from 'assert'

import { TableDecision } from './TableDecision'
import TestcaseDefinition from './TestcaseDefinition'
import FieldSectionDefinition from './FieldSectionDefinition'
import FieldSubSectionDefinition from './FieldSubSectionDefinition'
import MultiRowSectionDefinition from './MultiRowSectionDefinition'
import SummarySectionDefinition from './SummarySectionDefinition'
import ExecuteSectionDefinition from './ExecuteSectionDefinition'
import MultiplicitySectionDefinition from './MultiplicitySectionDefinition'
import * as sectionTypes from './constants/sectionTypes'

/**
 * Creates a real model from a serialized JSON Object.
 * This is only used for tests.
 * @param fileName {string} The file name of the JSON file
 * @return model {object} The created model
 */
export default function createModel(fileName) {
  assert(fileName)

  // eslint-disable-next-line no-sync
  const tableData = jsonfile.readFileSync(fileName)

  return createModelFromBuffer(tableData)
}

/**
 * Creates a real model from a serialized JSON Object.
 * This is only used for tests.
 * @param fileName {string} The file name of the JSON file
 * @return model {object} The created model
 */
export function createModelFromBuffer(tableData) {
  const table = new TableDecision()
  Object.assign(table, tableData)

  // create the testcases
  table.testcaseOrder.forEach(tcId => {
    const tc = new TestcaseDefinition()
    const tcData = table.testcases[tcId]
    Object.assign(tc, tcData)
    table.testcases[tcId] = tc
  })

  // iterates the sections
  Object.keys(table.sections).forEach(sectionId => {
    const section = table.sections[sectionId]
    assignSection(table, section, sectionId)
  })

  return table
}

/**
 * Assignes a single section data to an section Object
 * @param table {object} The table object
 * @param section {object} The section data to be morphed into a real object
 * @param sectionId {string} The id of this section
 * @param parent {object} For subSections this is the parent section object
 */
function assignSection(table, section, sectionId, parent) {
  assert(table)
  assert(section)

  const sectionType = section.sectionType

  let sectionObject
  if (sectionType === sectionTypes.SUMMARY_SECTION) {
    sectionObject = new SummarySectionDefinition()
  } else if (sectionType === sectionTypes.MULTI_ROW_SECTION) {
    sectionObject = new MultiRowSectionDefinition()
  } else if (sectionType === sectionTypes.FIELD_SECTION) {
    sectionObject = new FieldSectionDefinition()
  } else if (sectionType === sectionTypes.FIELD_SUB_SECTION) {
    sectionObject = new FieldSubSectionDefinition()
  } else if (sectionType === sectionTypes.MULTIPLICITY_SECTION) {
    sectionObject = new MultiplicitySectionDefinition()
  } else if (sectionType === sectionTypes.EXECUTE_SECTION) {
    sectionObject = new ExecuteSectionDefinition()
  } else {
    throw new Error(
      `Unkown section type '${sectionType}' in section '${sectionId}'`
    )
  }

  Object.assign(sectionObject, section)

  if (sectionType === sectionTypes.FIELD_SUB_SECTION) {
    assert(parent)
    // a subSection must be set to the parent section
    parent.subSections[sectionId] = sectionObject
  } else {
    table.sections[sectionId] = sectionObject
  }

  if (sectionType === sectionTypes.FIELD_SECTION) {
    // in this case we need to handle also the subSections
    Object.keys(section.subSections).forEach(subSectionId => {
      const subSection = section.subSections[subSectionId]
      assignSection(table, subSection, subSectionId, sectionObject)
    })
  }
}
