import fs from 'node:fs/promises'
import { TableDecision } from '../TableDecision'
import { LoggerMemory } from '@tlink/logger'
import { TestcaseDefinitionDecision } from '../TestcaseDefinitionDecision'
import { SectionType } from '../sections/SectionTypeEnum'
import { deserializeSummarySection } from './sections/deserializeSummarySection'
import { deserializeMultiRowSection } from './sections/deserializeMultiRowSection'
import { deserializeFieldSection } from './sections/deserializeFieldSection'
import { deserializeMultiplicitySection } from './sections/deserializeMultiplicitySection'
import { deserializeExecuteSection } from './sections/deserializeExecuteSection'
import { SectionInterface } from '../interface/SectionInterface'
import { deserializeTagSection } from './sections/deserializeTagSection'
import { deserializeFilterSection } from './sections/deserializeFilterSection'
import { deserializeGeneratorSwitchSection } from './sections/deserializeGeneratorSwitchSection'
import { deserializeNeverExecuteSection } from './sections/deserializeNeverExecuteSection'

/**
 * Creates a real model from a serialized JSON Object.
 * This is only used for tests.
 * @param fileName - The file name of the JSON file
 * @returns The created model
 */
export async function deserializeTableFromFile(fileName: string) {
  const tableData = JSON.parse(await fs.readFile(fileName, 'utf8'))
  return deserializeTableFromString(tableData)
}

/**
 * Creates a real model from a serialized JSON Object.
 * This is only used for tests.
 * @param tableDataRaw - The table data as a JSON string
 * @returns - The created model
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deserializeTableFromString(tableDataRaw: any) {
  const table = new TableDecision({
    logger: new LoggerMemory(),
    fileName: tableDataRaw.fileName,
    tableName: tableDataRaw.tableName
  })

  table.testcaseOrder = tableDataRaw.testcaseOrder

  // add the test cases
  for (const tcId of tableDataRaw.testcaseOrder) {
    const testcaseRawData = tableDataRaw.testcases[tcId]

    const testcase = new TestcaseDefinitionDecision({
      data: testcaseRawData.data,
      logger: table.logger,
      tableMeta: {
        fileName: tableDataRaw.fileName,
        tableName: tableDataRaw.tableName,
        tableType: table.tableType
      },
      testcaseName: testcaseRawData.testcaseName,
      table
    })

    testcase.id = tcId
    testcase.isPartOfCompletion = testcaseRawData.isPartOfCompletion
    table.testcases[tcId] = testcase
  }

  // iterates the sections
  for (const sectionId of Object.keys(tableDataRaw.sections)) {
    const sectionDataRaw = tableDataRaw.sections[sectionId]
    const sectionType = sectionDataRaw.sectionType

    let sectionObject: SectionInterface
    if (sectionType === SectionType.SUMMARY_SECTION) {
      sectionObject = deserializeSummarySection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.MULTI_ROW_SECTION) {
      sectionObject = deserializeMultiRowSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.FIELD_SECTION) {
      sectionObject = deserializeFieldSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.MULTIPLICITY_SECTION) {
      sectionObject = deserializeMultiplicitySection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.EXECUTE_SECTION) {
      sectionObject = deserializeExecuteSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.TAG_SECTION) {
      sectionObject = deserializeTagSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.FILTER_SECTION) {
      sectionObject = deserializeFilterSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.GENERATOR_SWITCH_SECTION) {
      sectionObject = deserializeGeneratorSwitchSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else if (sectionType === SectionType.NEVER_EXECUTE_SECTION) {
      sectionObject = deserializeNeverExecuteSection({
        sectionDataRaw,
        table,
        sectionId
      })
    } else {
      throw new Error(
        `Unkown section type '${sectionType}' in section '${sectionId}'`
      )
    }

    table.sections[sectionId] = sectionObject
    table.sectionOrder.push(sectionId)
  }

  return table
}
