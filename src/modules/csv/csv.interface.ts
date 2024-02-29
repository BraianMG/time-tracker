import { ColumnOption } from 'csv-parse/.';

export interface Params {
  filePath: string;
  delimiter?: string | Buffer | string[] | undefined;
  columns?:
    | boolean
    | ColumnOption[]
    | ((record: any) => ColumnOption[])
    | undefined;
  from_line?: number | undefined;
}
