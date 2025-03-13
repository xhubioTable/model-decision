import { ExecuteSectionDefinition } from '../../sections/ExecuteSectionDefinition'
import { DeserializeSectionRequest } from './DeserializeSectionRequestInterface'

export function deserializeExecuteSection(
  request: DeserializeSectionRequest
): ExecuteSectionDefinition {
  const { sectionDataRaw } = request
  const name = sectionDataRaw.name
  const headerRow = sectionDataRaw.headerRow

  const sectionObject = new ExecuteSectionDefinition({ name, headerRow })
  return sectionObject
}
