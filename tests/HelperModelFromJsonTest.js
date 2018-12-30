'use strict'

import path from 'path'

import createModel from './HelperModelFromJson'

const fixturesDir = path.join(__dirname, 'fixtures')
const jsonFile = path.join(fixturesDir, 'descission_table_mini.json')
const jsonFileSingleRowSection = path.join(
  fixturesDir,
  'descission_table_singleRow.json'
)

describe('HelperModelFromJson', () => {
  test('Convert Json to real model', () => {
    const tableModel = createModel(jsonFile)
    expect(tableModel).toBeTruthy()
    delete tableModel.singleCheck
    delete tableModel.logger
    delete tableModel.sectionNames

    expect(tableModel).toEqual(MODEL)
    tableModel.calculate()
    tableModel.validate()
  })

  test('Convert Json singleRowSection to real model', () => {
    const tableModel = createModel(jsonFileSingleRowSection)
    expect(tableModel).toBeTruthy()

    tableModel.calculate()
    tableModel.validate()
  })
})

const MODEL = {
  name: 'CreatePerson_mini',
  sectionOrder: [
    'db14bc27-4884-48a0-a6d9-7ebbeaff89fe',
    'aa7045ff-00dd-44b5-beac-209d307ded4a',
    '18a50921-5c38-44df-96de-d445af2caf89',
    '22da7a72-1530-41f8-bf94-ea3eee947f9d',
  ],
  sections: {
    '18a50921-5c38-44df-96de-d445af2caf89': {
      dataRows: [],
      done: undefined,
      headerRow: '18a50921-5c38-44df-96de-d445af2caf89',
      multiInstancesAllowed: false,
      multiple: true,
      name: 'Summary',
      percent: undefined,
      sectionType: 'SummarySection',
      total: undefined,
    },
    '22da7a72-1530-41f8-bf94-ea3eee947f9d': {
      comments: {
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'a comment 1',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'a comment 2',
      },
      dataRows: [
        '428415a8-d19e-40d9-b46c-03eb3f5dc669',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b',
      ],
      headerRow: '22da7a72-1530-41f8-bf94-ea3eee947f9d',
      keys: {
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'Abort action',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'Create new Person record',
      },
      mandatory: false,
      multiInstancesAllowed: true,
      multiple: true,
      name: 'Effect',
      others: {
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'other effect 1',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'other effect 2',
      },
      sectionType: 'MultiRowSection',
    },
    'aa7045ff-00dd-44b5-beac-209d307ded4a': {
      dataRows: [
        'b821f001-4700-42bb-8d3e-13237cabd951',
        '4a8d876f-af3d-4c25-869c-7211061ff6f6',
      ],
      headerRow: 'aa7045ff-00dd-44b5-beac-209d307ded4a',
      mandatory: true,
      multiInstancesAllowed: true,
      multiple: true,
      name: 'Primary data',
      sectionType: 'FieldSection',
      subSections: {
        '4a8d876f-af3d-4c25-869c-7211061ff6f6': {
          comments: {
            '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'No value given',
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'A valid last name',
          },
          dataRows: [
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b',
            '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa',
          ],
          equivalenceClasses: {
            '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'empty',
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'valid',
          },
          headerRow: '4a8d876f-af3d-4c25-869c-7211061ff6f6',
          mandatory: true,
          multiInstancesAllowed: true,
          multiple: true,
          name: 'last-name',
          parent: 'aa7045ff-00dd-44b5-beac-209d307ded4a',
          sectionType: 'FieldSubSection',
          tdgMandatory: false,
          tdgs: {
            '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'gen_func 4',
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'gen_func 3',
          },
        },
        'b821f001-4700-42bb-8d3e-13237cabd951': {
          comments: {
            '70cb48fc-d105-41ec-8891-d75d722c4fed': 'A valid first name',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'No value given',
          },
          dataRows: [
            '70cb48fc-d105-41ec-8891-d75d722c4fed',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a',
          ],
          equivalenceClasses: {
            '70cb48fc-d105-41ec-8891-d75d722c4fed': 'valid',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'empty',
          },
          headerRow: 'b821f001-4700-42bb-8d3e-13237cabd951',
          mandatory: true,
          multiInstancesAllowed: true,
          multiple: true,
          name: 'first-name',
          parent: 'aa7045ff-00dd-44b5-beac-209d307ded4a',
          sectionType: 'FieldSubSection',
          tdgMandatory: false,
          tdgs: {
            '70cb48fc-d105-41ec-8891-d75d722c4fed': 'gen_func 1',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'gen_func 2',
          },
        },
      },
      tdgMandatory: false,
    },
    'db14bc27-4884-48a0-a6d9-7ebbeaff89fe': {
      comments: {
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'any comment 1',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833': 'any comment 2',
      },
      dataRows: [
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833',
      ],
      headerRow: 'db14bc27-4884-48a0-a6d9-7ebbeaff89fe',
      keys: {
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'Yes',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833': 'No ',
      },
      mandatory: false,
      multiInstancesAllowed: true,
      multiple: true,
      name: 'Execute',
      others: {
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'any value 1',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833': 'any value 2',
      },
      sectionType: 'MultiRowSection',
    },
  },
  testcaseOrder: [
    'f4fc8e6a-0547-4df0-b8a0-d49ab99aad37',
    'afb58c1f-bb1b-418a-a40b-2c0152545c3d',
    '66065dda-41e8-4d80-91c1-c4e5111d5b4c',
  ],
  testcases: {
    '66065dda-41e8-4d80-91c1-c4e5111d5b4c': {
      _execute: true,
      _name: 3,
      data: {
        '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'e',
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'x',
        'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'x',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'x',
        'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'e',
      },
      id: '66065dda-41e8-4d80-91c1-c4e5111d5b4c',
      isPartOfCompletion: true,
      meta: undefined,
      multiplicity: 1,
      table: undefined,
    },
    'afb58c1f-bb1b-418a-a40b-2c0152545c3d': {
      _execute: true,
      _name: 2,
      data: {
        '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'e',
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'x',
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'x',
        '70cb48fc-d105-41ec-8891-d75d722c4fed': 'x',
        'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'e',
      },
      id: 'afb58c1f-bb1b-418a-a40b-2c0152545c3d',
      isPartOfCompletion: true,
      meta: undefined,
      multiplicity: 1,
      table: undefined,
    },
    'f4fc8e6a-0547-4df0-b8a0-d49ab99aad37': {
      _execute: true,
      _name: 1,
      data: {
        '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'e',
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'x',
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'x',
        'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'x',
        'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'a',
      },
      id: 'f4fc8e6a-0547-4df0-b8a0-d49ab99aad37',
      isPartOfCompletion: true,
      meta: undefined,
      multiplicity: 1,
      table: undefined,
    },
  },
}
