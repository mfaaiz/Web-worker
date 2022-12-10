/// <reference lib="webworker" />
import getTableData from './providers/services/table-data'
// import { TableResult } from './model/tableResult'

// tableResult:TableResult

// function hello(){
//   TableResult.getTable()
// }

addEventListener('message', ({ data }) => {
  const result = getTableData()
  // const response = `worker response to ${'data'}`
  const response = { result }
  postMessage(response)
})
