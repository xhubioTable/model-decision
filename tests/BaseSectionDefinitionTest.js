'use strict'

import { getLoggerMemory } from '@xhubioTable/logger'
import { BaseSectionDefinition, sectionTypes } from '../lib/index'

describe('BaseSectionDefinition', () => {
  it('Create instance', () => {
    const obj = new BaseSectionDefinition()
    expect(obj !== undefined).toBeTruthy()
  })

  it('Create instance with name', () => {
    const obj = new BaseSectionDefinition({ name: 'Gumbo' })
    expect(obj.name === 'Gumbo').toBeTruthy()
    expect(obj.sectionType === sectionTypes.BASE_SECTION).toBeTruthy()
  })

  it('Validate without name', () => {
    // Cleanup old log entries
    getLoggerMemory().clear()

    const obj = new BaseSectionDefinition()
    const issues = obj.validate()

    expect(issues.length === 1).toBeTruthy()
  })

  it('Validate with name', () => {
    // Cleanup old log entries
    getLoggerMemory().clear()

    const obj = new BaseSectionDefinition({ name: 'Super object' })
    const issues = obj.validate()

    expect(issues.length === 0).toBeTruthy()
  })
})
