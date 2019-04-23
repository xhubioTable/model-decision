'use strict'

import {
  TestcaseDefinitionDecision,
  MultiRowSectionDefinition,
} from '../lib/index'

describe('TestcaseDefinitionDecision', () => {
  it('Create instance', () => {
    const obj = new TestcaseDefinitionDecision()
    delete obj.id
    delete obj.logger

    expect(obj !== undefined).toBeTruthy()
    expect(obj).toEqual({
      isPartOfCompletion: true,
      multiplicity: 1,
      data: {},
      meta: undefined,
      _name: undefined,
      _execute: true,
      _neverExecute: false,
      table: undefined,
    })
  })

  it('Create instance with name', () => {
    const obj = new TestcaseDefinitionDecision({ name: 'tc 1' })
    delete obj.id
    delete obj.logger

    expect(obj).toEqual({
      isPartOfCompletion: true,
      multiplicity: 1,
      data: {},
      meta: undefined,
      _name: 'tc 1',
      _execute: true,
      _neverExecute: false,
      table: undefined,
    })
  })

  describe('validate', () => {
    it('Create instance with name', () => {
      const obj = new TestcaseDefinitionDecision({ name: 'Super testcase' })
      const section = new MultiRowSectionDefinition({ name: 'Super section' })
      section.mandatory = false

      const issues = obj.validate(section)
      expect(issues.length === 0).toBeTruthy()
    })

    it('Create instance missing name', () => {
      const obj = new TestcaseDefinitionDecision()
      const section = new MultiRowSectionDefinition({ name: 'Super section' })
      section.mandatory = false

      const issues = obj.validate(section)
      expect(issues.length === 1).toBeTruthy()
      expect(issues[0].message).toEqual('The testcase has no name')
    })

    it('TestcaseDefinitionDecision with missing value', () => {
      const obj = new TestcaseDefinitionDecision({ name: 'Super testcase' })
      const section = new MultiRowSectionDefinition({ name: 'Super section' })
      section.mandatory = true
      section.createNewRow()
      section.createNewRow()
      section.createNewRow()
      section.mandatory = true

      const issues = obj.validate(section)
      expect(issues.length === 1).toBeTruthy()
      expect(issues[0].message).toEqual(
        `The testcase 'Super testcase' has no value defined for the section 'Super section'`
      )
    })

    it('TestcaseDefinitionDecision with too many values', () => {
      const obj = new TestcaseDefinitionDecision({ name: 'Super testcase' })
      const section = new MultiRowSectionDefinition({ name: 'Super section' })
      const rowId1 = section.createNewRow()
      section.createNewRow()
      const rowId3 = section.createNewRow()
      section.mandatory = true
      section.multiple = false

      obj.data[rowId1] = 'x'
      obj.data[rowId3] = 'x'

      const issues = obj.validate(section)
      expect(issues.length === 1).toBeTruthy()
      expect(issues[0].message).toEqual(
        `The testcase 'Super testcase' has too many values defined for the section 'Super section'`
      )
    })
  })
})
