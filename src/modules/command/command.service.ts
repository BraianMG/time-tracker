import { Command as Commander } from 'commander';
import { Options } from './command.interface';
import { COMMANDS } from '@utils/constants';

class CommandService {
  private program: Commander;
  private filePathOptions = COMMANDS.OPTIONS.FILE_PATH;
  private startDateOptions = COMMANDS.OPTIONS.START_DATE;
  private endDateOptions = COMMANDS.OPTIONS.END_DATE;
  private ignoreTicketsOptions = COMMANDS.OPTIONS.IGNORE_TICKETS;

  constructor() {
    this.program = new Commander();
  }

  public getOptions(): Options {
    this.program
      .option(
        `${this.filePathOptions.optionName} ${this.filePathOptions.paramName}`,
        this.filePathOptions.description,
      )
      .option(
        `${this.startDateOptions.optionName} ${this.startDateOptions.paramName}`,
        this.startDateOptions.description,
      )
      .option(
        `${this.endDateOptions.optionName} ${this.endDateOptions.paramName}`,
        this.endDateOptions.description,
      )
      .option(
        `${this.ignoreTicketsOptions.optionName} ${this.ignoreTicketsOptions.paramName}`,
        this.ignoreTicketsOptions.description,
      );

    this.program.parse(process.argv);

    const options = this.program.opts<Options>();

    this.validateOptions(options);

    return options;
  }

  private validateOptions(options: Options) {
    if (!options.filePath)
      throw new Error(
        `The ${this.filePathOptions.optionName} parameter is required`,
      );

    if (!options.startDate)
      throw new Error(
        `The ${this.startDateOptions.optionName} parameter is required`,
      );

    if (!options.endDate)
      throw new Error(
        `The ${this.endDateOptions.optionName} parameter is required`,
      );

    // TODO: Add more validations
  }
}

export const Command = new CommandService();
