import { Type } from 'class-transformer'
import { Child } from './Child'

export class Table {
  id: string
  int: number
  float: number
  color: string
  @Type(() => Child)
  child: Child

  constructor(param: Table) {
    this.id = param.id
    this.int = param.int
    this.float = param.float
    this.color = param.color
    this.child = param.child
  }
}
