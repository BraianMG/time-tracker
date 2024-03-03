import { Csv, Params } from '@modules/csv';
import { Command } from '@modules/command';
import { CSV_DELIMITER, HEADERS } from '@utils/constants';
import { CsvData } from '@modules/core';
import {
  Data,
  FilterDataOptions,
  InfoPerTicket,
  Summary,
  TicketInfo,
} from './core.interface';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { removeAccentMarks } from '@utils/functions';

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
        ignoreTickets: options.ignoreTickets,
      });
      const result = this.formatResult(filteredData);
      console.log(result);
    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
    }
  }

  private mapAndFilterData(
    csvData: CsvData[],
    filterOptions: FilterDataOptions,
  ): Data[] {
    const dateRangeUtc = {
      startDate: dayjs(filterOptions.startDate).startOf('day'),
      endDate: dayjs(filterOptions.endDate).endOf('day'),
    };
    const ignoreTickets = filterOptions.ignoreTickets
      ?.split(',')
      .map(e => removeAccentMarks(e).toUpperCase());

    return csvData
      .filter(data => {
        const ticket = removeAccentMarks(data.ticket).toUpperCase()
        if (ignoreTickets?.includes(ticket)) return false;

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

  private formatResult(data: Data[]): {
    infoPerTicket: InfoPerTicket;
    summary: Summary;
  } {
    const infoPerTicket: InfoPerTicket = {};
    const summary: Summary = {
      totalHoursConsumed: 0,
      totalDaysConsumed: 0,
    };
    const ticketInfo: TicketInfo = {
      hoursConsumed: 0,
      daysConsumed: 0,
      comments: '',
    };

    data.forEach(d => {
      if (!infoPerTicket[d.ticket]) {
        infoPerTicket[d.ticket] = { ...ticketInfo };
      }

      const startDate = dayjs(d.startDate);
      const endDate = dayjs(d.endDate);
      const dif = endDate.diff(startDate, 'm');
      const hoursConsumed = dif / 60;
      const daysConsumed = dif / (60 * 8);

      infoPerTicket[d.ticket].hoursConsumed += hoursConsumed;
      infoPerTicket[d.ticket].daysConsumed += daysConsumed;
      infoPerTicket[d.ticket].comments += `${d.task}\n`;

      summary.totalHoursConsumed += hoursConsumed;
      summary.totalDaysConsumed += daysConsumed;
    });

    return { infoPerTicket, summary };
  }
}

export const Core = new CoreService();
