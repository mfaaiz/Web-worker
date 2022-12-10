import {Type} from "class-transformer";
import {Table} from "./Table";

export class TableResult {
  
  incomplete_results: boolean;
  
  @Type(() => Table) // providing a Type is required.
  items: Table[];
  
  total_count: number;
  
  get getTable() {
    return this.items.map(item => item.id);
  }
  
}