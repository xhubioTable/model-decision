'use strict'

import { getLoggerMemory } from '@xhubioTable/logger'
import { SummarySectionDefinition, sectionTypes } from '../lib/index'

describe('SummarySectionDefinition', () => {
  it('Create instance', () => {
    const obj = new SummarySectionDefinition()
    expect(obj !== undefined).toBeTruthy()
  })

  it('Create instance with name', () => {
    const obj = new SummarySectionDefinition({ name: 'Gumbo' })
    expect(obj.name === 'Gumbo').toBeTruthy()
    expect(obj.sectionType === sectionTypes.SUMMARY_SECTION).toBeTruthy()
  })

  it('Validate without name', () => {
    // Cleanup old log entries
    getLoggerMemory().clear()

    const obj = new SummarySectionDefinition()
    const issues = obj.validate()

    expect(issues.length === 1).toBeTruthy()
  })

  it('Validate with name', () => {
    // Cleanup old log entries
    getLoggerMemory().clear()

    const obj = new SummarySectionDefinition({ name: 'Super object' })
    const issues = obj.validate()

    expect(issues.length === 0).toBeTruthy()
  })
})
