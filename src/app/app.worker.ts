/// <reference lib="webworker" />
// import { TableResult } from './model/tableResult'

// tableResult:TableResult

// function hello(){
//   TableResult.getTable()
// }

addEventListener('message', ({ data }) => {
  // const response = `worker response to ${'data'}`
  const response = { key: 'key', value: 'value' }
  postMessage(response)
})
