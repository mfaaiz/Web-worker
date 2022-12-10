import { Component, OnInit } from '@angular/core'
import { plainToClass } from 'class-transformer'
import { Table } from './model/Table'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-worker-task'

  search(term: string) {
    console.log(term)

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./app.worker', { type: 'module' })
      worker.onmessage = ({ data }) => {
        let users = plainToClass(Table, data)
        console.log(users)
        console.log(`page got message: ${JSON.stringify(data)}`)
      }
      worker.postMessage('hello')
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
