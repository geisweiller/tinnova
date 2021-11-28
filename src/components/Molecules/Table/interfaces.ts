import { Column } from 'react-table';

export interface ITable {
  columns: Column<object>[];
  data: any;
}
