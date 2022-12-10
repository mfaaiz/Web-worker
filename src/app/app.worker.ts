/// <reference lib="webworker" />
import getTableData from './providers/services/table-data'

addEventListener('message', ({ data }) => {
  //fetch data from json file
  const response = getTableData()
  postMessage(response)
})
