import { Injectable } from '@angular/core'
import { TableResult } from '../model/tableResult'

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  async sayHello() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker('../providers/web.worker.service', {
        type: 'module',
      })

      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`)
      }

      worker.postMessage('hello')
    }
  }
}
