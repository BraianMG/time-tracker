export const COMMANDS = {
  OPTIONS: {
    FILE_PATH: {
      optionName: '--file-path',
      paramName: '<filePath>',
      description: 'Path to CSV file',
    },
    START_DATE: {
      optionName: '--start-date',
      paramName: '<startDate>',
      description: 'Start date',
    },
    END_DATE: {
      optionName: '--end-date',
      paramName: '<endDate>',
      description: 'End date',
    },
    IGNORE_TICKETS: {
      optionName: '--ignore-tickets',
      paramName: '<ignoreTickets>',
      description: 'Tickets to ignore separated by comma',
    },
  },
};

export const HEADERS = [
  'ticket',
  'task',
  'date',
  'startTime',
  'endTime',
  'hours',
];

export const CSV_DELIMITER = ';';

export const WORKING_DAY_HOURS = 8;
