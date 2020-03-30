'use strict'

import { FilterSectionDefinition, sectionTypes } from '../src/index'

describe('FilterSectionDefinition', () => {
  it('Create instance', () => {
    const obj = new FilterSectionDefinition()
    expect(obj !== undefined).toBeTruthy()
    expect(obj.sectionType === sectionTypes.FILTER_SECTION).toBeTruthy()
  })

  it('Get new empty section', () => {
    const obj = new FilterSectionDefinition({ name: 'Gumbo' })
    obj.createNewRow()
    obj.createNewRow()
    obj.createNewRow()
    expect(obj.name === 'Gumbo').toBeTruthy()
    expect(obj.sectionType).toEqual(sectionTypes.FILTER_SECTION)
    expect(obj.getRowIds().length).toEqual(4)
  })

  describe('addRow', () => {
    it('No parameter given adds an empty entry', () => {
      const obj = new FilterSectionDefinition()
      const headerId = obj.headerRow
      const row1 = obj.createNewRow()
      const row2 = obj.createNewRow()

      delete obj.logger

      expect(obj).toEqual({
        name: undefined,
        filterProcessorNames: {},
        comments: {},
        expressions: {},
        sectionType: sectionTypes.FILTER_SECTION,
        mandatory: false,
        multiple: true,
        multiInstancesAllowed: true,
        headerRow: headerId,
        dataRows: [row1, row2],
      })
    })
  })

  describe('Validate', () => {
    it('Entry with no issues', () => {
      const obj = new FilterSectionDefinition({ name: 'gum' })
      const row1 = obj.createNewRow()
      const row2 = obj.createNewRow()

      obj.filterProcessorNames[row1] = 'MyKey'
      obj.filterProcessorNames[row2] = 'MyKey 1'

      obj.expressions[row1] = 'exp 1'
      obj.expressions[row2] = 'exp 2'

      const issues = obj.validate()
      expect(issues.length === 0).toBeTruthy()
    })

    it('Entry with missing mandatory filterProcessorName entry', () => {
      const obj = new FilterSectionDefinition({ name: 'gum' })
      const row1 = obj.createNewRow()
      const row2 = obj.createNewRow()

      obj.filterProcessorNames[row1] = 'MyKey'
      // obj.filterProcessorNames[row2] = 'MyKey 1';

      obj.expressions[row1] = 'exp 1'
      obj.expressions[row2] = 'exp 2'

      const issues = obj.validate()
      expect(issues.length === 1).toBeTruthy()

      expect(issues).toEqual([
        {
          section: obj,
          type: 'definition',
          message: 'The filterProcessorNames fields must exists',
          rowId: row2,
          level: 'ERROR',
        },
      ])
    })

    it('Entry with missing mandatory expression entry', () => {
      const obj = new FilterSectionDefinition({ name: 'gum' })
      const row1 = obj.createNewRow()
      const row2 = obj.createNewRow()

      obj.filterProcessorNames[row1] = 'MyKey'
      obj.filterProcessorNames[row2] = 'MyKey 1'

      obj.expressions[row1] = 'exp 1'
      // obj.expressions[row2] = 'exp 2'

      const issues = obj.validate()
      expect(issues.length === 1).toBeTruthy()

      expect(issues).toEqual([
        {
          section: obj,
          type: 'definition',
          message: 'The expressions field must exists',
          rowId: row2,
          level: 'ERROR',
        },
      ])
    })
  })
})
