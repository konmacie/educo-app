import { LogLevel, LoggerType } from 'src/app/core/services/logger.service';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/',
  logging: [
    {
      type: LoggerType.CONSOLE,
      level: LogLevel.DEBUG,
    },
  ],
};
