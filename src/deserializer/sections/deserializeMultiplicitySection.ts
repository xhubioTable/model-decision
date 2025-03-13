import { MultiplicitySectionDefinition } from '../../sections/MultiplicitySectionDefinition'
import { DeserializeSectionRequest } from './DeserializeSectionRequestInterface'

export function deserializeMultiplicitySection(
  request: DeserializeSectionRequest
): MultiplicitySectionDefinition {
  const { sectionDataRaw } = request
  const name = sectionDataRaw.name
  const headerRow = sectionDataRaw.headerRow
  const sectionObject = new MultiplicitySectionDefinition({ name, headerRow })
  return sectionObject
}
