import { Csv, Params } from '@modules/csv';
import { Command } from '@modules/command';
import { CSV_DELIMITER, HEADERS } from '@utils/constants';
import { CsvData } from '@modules/core';

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
      const datosCSV = await Csv.processCsv<CsvData>(params);
      console.log(datosCSV);
      // TODO: Map data and filter by date range
    } catch (error) {
      console.error('Error al leer el archivo CSV:', error);
    }
  }

  private async getDataFromCsv() {}
}

export const Core = new CoreService();
