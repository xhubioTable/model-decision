import { NeverExecuteSectionDefinition } from '../../sections/NeverExecuteSectionDefinition'
import { DeserializeSectionRequest } from './DeserializeSectionRequestInterface'

export function deserializeNeverExecuteSection(
  request: DeserializeSectionRequest
): NeverExecuteSectionDefinition {
  const { sectionDataRaw } = request
  const name = sectionDataRaw.name
  const headerRow = sectionDataRaw.headerRow
  const sectionObject = new NeverExecuteSectionDefinition({ name, headerRow })

  return sectionObject
}
