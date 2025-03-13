import { SummarySectionDefinition } from '../../sections/SummarySectionDefinition'
import { DeserializeSectionRequest } from './DeserializeSectionRequestInterface'

export function deserializeSummarySection(
  request: DeserializeSectionRequest
): SummarySectionDefinition {
  const { sectionDataRaw } = request
  const name = sectionDataRaw.name
  const headerRow = sectionDataRaw.headerRow
  const sectionObject = new SummarySectionDefinition({ name, headerRow })

  return sectionObject
}
