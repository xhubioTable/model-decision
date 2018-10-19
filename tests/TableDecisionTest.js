'use strict'

import path from 'path'

import { TableDecision } from '../lib/index'
import createModel from '../lib/HelperModelFromJson'

const dataFile = path.join(__dirname, 'fixtures', 'table_createPerson.json')
const dataFileDouble = path.join(
  __dirname,
  'fixtures',
  'doubleEquivalenceName.json'
)

describe('Table', () => {
  describe('Complete table test', () => {
    it('all', () => {
      const model = createModel(dataFile)
      const issues = model.validate()
      model.calculate()

      // NO errors expected
      expect(issues).toEqual([])
    })
  })

  describe('validate double field name', () => {
    it('all', () => {
      const model = createModel(dataFileDouble)
      const issues = model.validate()

      expect(issues).toEqual([
        {
          level: 'ERROR',
          message:
            "The fieldName 'first-name' is double in the table 'CreatePerson'",
          table: 'CreatePerson',
          type: 'tableDecision',
        },
      ])
    })
  })

  describe('Create Instance', () => {
    it('Create instance without name', () => {
      const obj = new TableDecision()
      expect(obj !== undefined).toBeTruthy()

      delete obj.singleCheck
      expect(obj).toEqual({
        name: undefined,
        testcaseOrder: [],
        testcases: {},
        sections: {},
        sectionOrder: [],
      })
    })

    it('Create instance with name', () => {
      const obj = new TableDecision({ name: 'best name' })
      expect(obj !== undefined).toBeTruthy()

      delete obj.singleCheck
      expect(obj).toEqual({
        name: 'best name',
        testcaseOrder: [],
        testcases: {},
        sections: {},
        sectionOrder: [],
      })
    })
  })

  describe('addNewMultiRowSection', () => {
    it('ERROR: position < 0', () => {
      const obj = new TableDecision({ name: 'best name' })
      expect(() => {
        obj.addNewMultiRowSection('singleRowSec', -3)
      }).toThrow()
    })

    it('add row no testcase', () => {
      const obj = new TableDecision({ name: 'best name' })
      const sectionDefinition = obj.addNewMultiRowSection('multiRowSec')

      expect(sectionDefinition !== undefined).toBeTruthy()
      expect(sectionDefinition.name).toEqual('multiRowSec')
      expect(sectionDefinition.sectionType).toEqual('MultiRowSection')

      const definitionId = sectionDefinition.headerRow

      expect(obj.sections[definitionId]).toEqual(sectionDefinition)
      delete obj.sections
      delete obj.singleCheck

      expect(obj).toEqual({
        name: 'best name',
        testcaseOrder: [],
        testcases: {},
        sectionOrder: [definitionId],
      })
    })
  })

  describe('addNewFieldSection', () => {
    it('ERROR: position < 0', () => {
      const obj = new TableDecision({ name: 'best name' })
      expect(() => {
        obj.addNewFieldSection('fieldRowSec', -3)
      }).toThrow()
    })

    it('add section no testcase', () => {
      const obj = new TableDecision({ name: 'best name' })
      const sectionDefinition = obj.addNewFieldSection('fieldRowSec')

      expect(sectionDefinition !== undefined).toBeTruthy()
      expect(sectionDefinition.name).toEqual('fieldRowSec')
      expect(sectionDefinition.sectionType).toEqual('FieldSection')

      const definitionId = sectionDefinition.headerRow

      expect(obj.sections[definitionId]).toEqual(sectionDefinition)
      delete obj.sections
      delete obj.singleCheck

      expect(obj).toEqual({
        name: 'best name',
        testcaseOrder: [],
        testcases: {},
        sectionOrder: [definitionId],
      })
    })
  })

  describe('addNewSummarySection', () => {
    it('ERROR: position < 0', () => {
      const obj = new TableDecision({ name: 'best name' })
      expect(() => {
        obj.addNewSummarySection('Summary', -3)
      }).toThrow()
    })

    it('add section no testcase', () => {
      const obj = new TableDecision({ name: 'best name' })
      const sectionDefinition = obj.addNewSummarySection('Summary')

      expect(sectionDefinition !== undefined).toBeTruthy()
      expect(sectionDefinition.name).toEqual('Summary')
      expect(sectionDefinition.sectionType).toEqual('SummarySection')

      const definitionId = sectionDefinition.headerRow

      expect(obj.sections[definitionId]).toEqual(sectionDefinition)
      delete obj.sections
      delete obj.singleCheck

      expect(obj).toEqual({
        name: 'best name',
        testcaseOrder: [],
        testcases: {},
        sectionOrder: [definitionId],
      })
    })
  })

  describe('addNewTestcase', () => {
    it('Add testcase no sections', () => {
      const obj = new TableDecision({ name: 'best name' })
      const tc1 = obj.addNewTestcase('tc1')
      const tc3 = obj.addNewTestcase('tc3')
      const tc2 = obj.addNewTestcase('tc2', 1)

      expect(tc1.name).toEqual('tc1')

      expect(obj.testcaseOrder.length).toEqual(3)

      const idTc1 = obj.testcaseOrder[0]
      const idTc2 = obj.testcaseOrder[1]
      const idTc3 = obj.testcaseOrder[2]

      expect(idTc1).toEqual(tc1.id)
      expect(idTc2).toEqual(tc2.id)
      expect(idTc3).toEqual(tc3.id)

      expect(obj.testcases[idTc1]).toEqual(tc1)
      expect(obj.testcases[idTc2]).toEqual(tc2)
      expect(obj.testcases[idTc3]).toEqual(tc3)
    })
  })

  describe('validate table', () => {
    it('Table without any data. Error name is missing', () => {
      const obj = new TableDecision()
      const issues = obj.validate()
      expect(issues).toEqual([
        {
          type: 'tableDecision',
          message: 'The table has no name',
          level: 'ERROR',
        },
      ])
    })

    it('Table without any data but name', () => {
      const obj = new TableDecision({ name: 'Table name' })
      const issues = obj.validate()
      expect(issues).toEqual([])
    })
  })

  describe('Add section wich can only exists once', () => {
    it('add double summary section', () => {
      const obj = new TableDecision()
      obj.addNewSummarySection('Summary')
      expect(() => {
        obj.addNewSummarySection('Summary')
      }).toThrow(
        `The section of type 'SummarySection' must not be added multiple times to the model`
      )
    })

    it('add double execute section', () => {
      const obj = new TableDecision()
      obj.addNewExecuteSection('Summary')
      expect(() => {
        obj.addNewExecuteSection('Summary')
      }).toThrow(
        `The section of type 'ExecuteSection' must not be added multiple times to the model`
      )
    })

    it('add double multiplicity section', () => {
      const obj = new TableDecision()
      obj.addNewMultiplicitySection('Summary')
      expect(() => {
        obj.addNewMultiplicitySection('Summary')
      }).toThrow(
        `The section of type 'MultiplicitySection' must not be added multiple times to the model`
      )
    })
  })

  describe('getTestcaseForName', () => {
    it('Add testcase no sections', () => {
      const obj = new TableDecision({ name: 'best name' })
      const tc1 = obj.addNewTestcase('tc1')
      const tc3 = obj.addNewTestcase('tc3')
      const tc2 = obj.addNewTestcase('tc2', 1)

      const resTc1 = obj.getTestcaseForName('tc1')
      expect(resTc1).toEqual(tc1)

      const resTc2 = obj.getTestcaseForName('tc2')
      expect(resTc2).toEqual(tc2)

      const resTc3 = obj.getTestcaseForName('tc3')
      expect(resTc3).toEqual(tc3)
    })
  })

  test('getTestcasesForExecution', () => {
    const table = new TableDecision({ name: 'best name' })
    const tc1 = table.addNewTestcase('tc1')
    const tc3 = table.addNewTestcase('tc3')
    const tc2 = table.addNewTestcase('tc2', 1)

    delete tc1.table
    delete tc2.table
    delete tc3.table

    delete tc1.id
    delete tc2.id
    delete tc3.id

    const gen = table.getTestcasesForExecution()

    let genObj = gen.next()
    delete genObj.value.id
    delete genObj.value.table
    expect(genObj.value).toEqual(tc1)

    genObj = gen.next()
    delete genObj.value.id
    delete genObj.value.table
    expect(genObj.value).toEqual(tc2)

    genObj = gen.next()
    delete genObj.value.id
    delete genObj.value.table
    expect(genObj.value).toEqual(tc3)

    genObj = gen.next()
    expect(genObj.done).toBeTruthy()
    expect(genObj.value).toBeUndefined()
  })
})
