import path from 'node:path'
import { deserializeTableFromFile } from '../../src/deserializer/deserializeTable'

const FIXTURES = path.join(
  __dirname,
  '..',
  'fixtures',
  'deserializer',
  'deserializeTable'
)
const FILE_TABLE_MINI = path.join(FIXTURES, 'descisionTableMini.json')
const FILE_TABLE_SINGLE_ROW = path.join(
  FIXTURES,

  'descisionTableSingleRow.json'
)

describe('deserialize table', () => {
  test('Convert Json to real model', async () => {
    const tableModel = await deserializeTableFromFile(FILE_TABLE_MINI)

    expect(tableModel).toBeTruthy()

    // delete tableModel.singleCheck

    delete (tableModel as unknown as any).logger // eslint-disable-line @typescript-eslint/no-explicit-any
    for (const tcId of Object.keys(tableModel.testcases)) {
      const tc = tableModel.testcases[tcId]
      delete (tc as unknown as any).logger // eslint-disable-line @typescript-eslint/no-explicit-any

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(tc as unknown as any).table = {
        tableName: tableModel.tableMeta.tableName
      }
    }
    // delete tableModel.sectionNames

    expect(tableModel).toEqual(MODEL)
    tableModel.calculate()
    tableModel.validate()
  })

  test('Convert Json singleRowSection to real model', async () => {
    const tableModel = await deserializeTableFromFile(FILE_TABLE_SINGLE_ROW)
    expect(tableModel).toBeTruthy()

    tableModel.calculate()
    tableModel.validate()
  })
})

const MODEL = {
  singleCheck: new Map(),
  sectionNames: new Set(),
  fileName: 'myFile.xlsx',
  tableName: 'descisionTableMini',
  tableType: 'decision-table',
  // tableMeta: {
  //   fileName: 'myFile.xlsx',
  //   tableName: 'descisionTableMini',
  //   tableType: 'decision-table'
  // },
  sectionOrder: [
    'db14bc27-4884-48a0-a6d9-7ebbeaff89fe',
    'aa7045ff-00dd-44b5-beac-209d307ded4a',
    '18a50921-5c38-44df-96de-d445af2caf89',
    '22da7a72-1530-41f8-bf94-ea3eee947f9d'
  ],
  sections: {
    '18a50921-5c38-44df-96de-d445af2caf89': {
      done: undefined,
      headerRow: '18a50921-5c38-44df-96de-d445af2caf89',
      multiInstancesAllowed: false,
      mandatory: false,
      multiple: true,
      name: 'Summary',
      percent: undefined,
      sectionType: 'SummarySection',
      total: undefined,
      _dataRows: []
    },
    '22da7a72-1530-41f8-bf94-ea3eee947f9d': {
      comments: {
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'a comment 1',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'a comment 2'
      },
      _dataRows: [
        '428415a8-d19e-40d9-b46c-03eb3f5dc669',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b'
      ],
      headerRow: '22da7a72-1530-41f8-bf94-ea3eee947f9d',
      keys: {
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'Abort action',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'Create new Person record'
      },
      mandatory: false,
      multiInstancesAllowed: true,
      multiple: true,
      name: 'Effect',
      others: {
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'other effect 1',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'other effect 2'
      },
      sectionType: 'MultiRowSection'
    },
    'aa7045ff-00dd-44b5-beac-209d307ded4a': {
      _dataRows: [
        'b821f001-4700-42bb-8d3e-13237cabd951',
        '4a8d876f-af3d-4c25-869c-7211061ff6f6'
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
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'A valid last name'
          },
          _dataRows: [
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b',
            '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa'
          ],
          equivalenceClasses: {
            '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'empty',
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'valid'
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
            'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'gen_func 3'
          }
        },
        'b821f001-4700-42bb-8d3e-13237cabd951': {
          comments: {
            '70cb48fc-d105-41ec-8891-d75d722c4fed': 'A valid first name',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'No value given'
          },
          _dataRows: [
            '70cb48fc-d105-41ec-8891-d75d722c4fed',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a'
          ],
          equivalenceClasses: {
            '70cb48fc-d105-41ec-8891-d75d722c4fed': 'valid',
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'empty'
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
            'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'gen_func 2'
          }
        }
      },
      tdgMandatory: false
    },
    'db14bc27-4884-48a0-a6d9-7ebbeaff89fe': {
      comments: {
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'any comment 1',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833': 'any comment 2'
      },
      _dataRows: [
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833'
      ],
      headerRow: 'db14bc27-4884-48a0-a6d9-7ebbeaff89fe',
      keys: {
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'Yes',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833': 'No '
      },
      mandatory: false,
      multiInstancesAllowed: true,
      multiple: true,
      name: 'Execute',
      others: {
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'any value 1',
        '845d19a8-bc35-45ef-bef7-86a8ae6de833': 'any value 2'
      },
      sectionType: 'MultiRowSection'
    }
  },
  testcaseOrder: [
    'f4fc8e6a-0547-4df0-b8a0-d49ab99aad37',
    'afb58c1f-bb1b-418a-a40b-2c0152545c3d',
    '66065dda-41e8-4d80-91c1-c4e5111d5b4c'
  ],
  testcases: {
    '66065dda-41e8-4d80-91c1-c4e5111d5b4c': {
      execute: true,
      neverExecute: false,
      testcaseName: '3',
      tableMeta: {
        fileName: 'myFile.xlsx',
        tableName: 'descisionTableMini',
        tableType: 'decision-table'
      },
      data: {
        '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'e',
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'x',
        'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'x',
        'c89f4265-4290-4655-8eb5-d3e0df7cd39b': 'x',
        'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'e'
      },
      id: '66065dda-41e8-4d80-91c1-c4e5111d5b4c',
      isPartOfCompletion: true,

      multiplicity: 1,
      table: {
        tableName: 'descisionTableMini'
      }
    },
    'afb58c1f-bb1b-418a-a40b-2c0152545c3d': {
      execute: true,
      neverExecute: false,
      testcaseName: '2',
      tableMeta: {
        fileName: 'myFile.xlsx',
        tableName: 'descisionTableMini',
        tableType: 'decision-table'
      },
      data: {
        '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'e',
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'x',
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'x',
        '70cb48fc-d105-41ec-8891-d75d722c4fed': 'x',
        'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'e'
      },
      id: 'afb58c1f-bb1b-418a-a40b-2c0152545c3d',
      isPartOfCompletion: true,

      multiplicity: 1,
      table: {
        tableName: 'descisionTableMini'
      }
    },
    'f4fc8e6a-0547-4df0-b8a0-d49ab99aad37': {
      execute: true,
      neverExecute: false,
      testcaseName: '1',
      tableMeta: {
        fileName: 'myFile.xlsx',
        tableName: 'descisionTableMini',
        tableType: 'decision-table'
      },
      data: {
        '21d99a7f-b9c9-4ec8-ae7c-971f5e90fafa': 'e',
        '428415a8-d19e-40d9-b46c-03eb3f5dc669': 'x',
        '54a9c356-c847-47a3-8f98-f83f9d12f9a3': 'x',
        'a2c01ec6-1fd7-493a-adb3-0b89cf75763a': 'x',
        'e90cf1e3-70c8-426a-bfa5-7f6cf2dc4a5b': 'a'
      },
      id: 'f4fc8e6a-0547-4df0-b8a0-d49ab99aad37',
      isPartOfCompletion: true,

      multiplicity: 1,
      table: {
        tableName: 'descisionTableMini'
      }
    }
  }
}
