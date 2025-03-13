import { FieldSectionDefinition } from '../../sections/FieldSectionDefinition'
import { deserializeFieldSubSection } from './deserializeFieldSubSection'
import { DeserializeSectionRequest } from './DeserializeSectionRequestInterface'

export function deserializeFieldSection(
  request: DeserializeSectionRequest
): FieldSectionDefinition {
  const { sectionDataRaw, table, sectionId } = request
  const name = sectionDataRaw.name
  const headerRow = sectionDataRaw.headerRow
  const mandatory = sectionDataRaw.mandatory
  const tdgMandatory = sectionDataRaw.tdgMandatory
  const sectionObject = new FieldSectionDefinition({
    name,
    headerRow,
    mandatory,
    tdgMandatory
  })

  // In a field section the dataRow ids are the ids of the sub section
  for (const rowId of sectionDataRaw._dataRows) {
    const subSectionData = sectionDataRaw.subSections[rowId]

    const subSection = deserializeFieldSubSection({
      sectionDataRaw: subSectionData,
      parentSectionId: sectionId,
      table
    })

    sectionObject.dataRows.push(rowId)
    sectionObject.subSections[rowId] = subSection
  }

  return sectionObject
}
