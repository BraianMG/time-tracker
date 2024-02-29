import fs from 'fs';
import { CsvError, parse as csvParse } from 'csv-parse';
import { Params } from './csv.interface';

class CsvService {
  constructor() {}

  public async processCsv<T>(params: Params): Promise<T[]> {
    try {
      
      return await this.parseCsv<T>(params);
    } catch (error: CsvError | Error | unknown) {
      console.log(error);

      if (error instanceof CsvError) {
        throw new Error(`Error code:${error.code}. Message: ${error.message}`);
      }

      if (error instanceof Error) {
        throw new Error(`Error:${error.name}. Message: ${error.message}`);
      }

      throw new Error('Unexpected error, check logs');
    }
  }

  private async parseCsv<T>(params: Params): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const resultados: T[] = [];

      fs.createReadStream(params.filePath, { encoding: 'utf-8' })
        .pipe(
          csvParse({
            delimiter: params.delimiter,
            columns: params.columns,
            from_line: params.from_line,
          }),
        )
        .on('data', (data: T) => {
          resultados.push(data);
        })
        .on('end', () => {
          resolve(resultados);
        })
        .on('error', (error: CsvError | Error | unknown) => {
          reject(error);
        });
    });
  }
}

export const Csv = new CsvService();
