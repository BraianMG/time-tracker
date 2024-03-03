import { Csv, Params } from '@modules/csv';
import { Command } from '@modules/command';
import { CSV_DELIMITER, HEADERS } from '@utils/constants';
import { CsvData } from '@modules/core';
import { Data, DateRange } from './core.interface';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

class CoreService {
  constructor() {}

  public async startProgram() {
    const options = Command.getOptions();

    const params: Params = {
      filePath: options.filePath,
      delimiter: CSV_DELIMITER,
      columns: HEADERS,
      from_line: 2,
    };

    try {
      const csvData = await Csv.processCsv<CsvData>(params);
      const filteredData = this.mapAndFilterData(csvData, {
        startDate: options.startDate,
        endDate: options.endDate,
      });
      console.log({ filteredData, countReg: filteredData.length });
      // TODO: Format response
    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
    }
  }

  private mapAndFilterData(csvData: CsvData[], dateRange: DateRange): Data[] {
    const dateRangeUtc = {
      startDate: dayjs(dateRange.startDate).startOf('day'),
      endDate: dayjs(dateRange.endDate).endOf('day'),
    };

    return csvData
      .filter(data => {
        const startDateUtc = dayjs(
          this.formatDateAndTime(data.date, data.startTime),
        );
        const endDateUtc = dayjs(
          this.formatDateAndTime(data.date, data.endTime),
        );

        return (
          startDateUtc.isSameOrAfter(dateRangeUtc.startDate) &&
          startDateUtc.isBefore(dateRangeUtc.endDate) &&
          endDateUtc.isSameOrBefore(dateRangeUtc.endDate) &&
          endDateUtc.isAfter(dateRangeUtc.startDate)
        );
      })
      .map<Data>(data => {
        return {
          ticket: data.ticket,
          task: data.task,
          startDate: dayjs(
            this.formatDateAndTime(data.date, data.startTime),
          ).toDate(),
          endDate: dayjs(
            this.formatDateAndTime(data.date, data.endTime),
          ).toDate(),
        };
      });
  }

  private formatDateAndTime(date: string, time: string): string {
    const _date = date.split('/');

    const year = _date[2];
    const month = _date[1].padStart(2, '0');
    const day = _date[0].padStart(2, '0');

    return `${year}-${month}-${day} ${time}`;
  }
}

export const Core = new CoreService();
