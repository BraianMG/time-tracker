export interface CsvData {
  ticket: string;
  task: string;
  date: string;
  startTime: string;
  endTime: string;
  hours: string;
}

export interface Data {
  ticket: string;
  task: string;
  startDate: Date;
  endDate: Date;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}
