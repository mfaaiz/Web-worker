import { Component, OnInit } from '@angular/core'
// import { HttpClient, HttpHeaders } from '@angular/common/http'

// import { Observable }       from 'rxjs/Observable';
import { plainToClass, classToPlain, Type, Transform } from 'class-transformer'
// import { TableResult } from './model/tableResult'
// import { Table } from './model/Table'
// import { Child } from './model/Child'

interface MyInterface {
  id: string
  name: string
  age: number
  date: Date
}
class MyClass {
  id: string
  name: string
  age: number
  @Type(() => Date)
  @Transform((value) => value, { toPlainOnly: true })
  date: Date

  constructor(param: MyInterface) {
    this.id = param.id
    this.name = param.name
    this.age = param.age
    this.date = param.date
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-worker-task'
  // tableResult: TableResult

  name = 'Angular'

  constructor() {
    let data = {
      id: '123',
      name: 'bob',
      age: 10,
      date: new Date('2019/12/15'),
    }
    console.log(data)

    const data2: MyInterface = data
    console.log(data2)

    this.myfunc(data2)
  }

  myfunc(param: MyInterface) {
    const c = new MyClass(param)
    console.log('c', c)

    console.log('classToPlain', classToPlain(c))
  }

  search(term: string) {
    console.log(term)

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./app.worker', { type: 'module' })
      worker.onmessage = ({ data }) => {
        // const tableResult = plainToClass(TableResult, data.json() as Object)
        // this.tableResult = tableResult
        console.log(`page got message: ${JSON.stringify(data)}`)
      }
      worker.postMessage('hello')
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
