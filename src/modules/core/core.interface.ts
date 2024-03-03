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

export interface TicketInfo {
  hoursConsumed: number;
  daysConsumed: number;
  comments?: string;
}

export interface InfoPerTicket {
  [key: string]: TicketInfo;
}

export interface Summary {
  totalHoursConsumed: number;
  totalDaysConsumed: number;
}
