import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { plainToClass } from 'class-transformer'
import { Table } from './model/Table'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  reactiveForm = new FormGroup({
    timer: new FormControl(''),
    arraySize: new FormControl(''),
    id: new FormControl(''),
  })

  displayedColumns: string[] = ['id', 'int', 'float', 'color', 'child']
  dataSource: Table
  showTable: boolean = false

  ngOnInit() {
    // receive data from web-worker
    this.getWorkerData()
  }

  getWorkerData() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./app.worker', { type: 'module' })
      worker.onmessage = ({ data }) => {
        this.showTable = true
        //transform response data(raw) to class
        let users = plainToClass(Table, data)
        console.log(users)

        //set table data to render on UI
        this.dataSource = users
      }
      worker.postMessage('hello')
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  onSubmit() {
    console.log(this.reactiveForm.value)
  }
}
