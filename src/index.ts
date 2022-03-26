import colors from 'colors/safe';

/**
 *Logger class
 */
export class Logger {
  public readonly name: string;
  public logLevel: string;

  /**
   * Logger()
   * @param name name
   */
  constructor(name: string) {
    this.name = name;
    this.logLevel = process.env.NODE_ENV || 'development';
  }

  public log(message: any, ...optionalParams: any[]) {
    console.log(colors.bgBlack(`${this.name}${message}`), ...optionalParams);
  }
  public debug(message: any, ...optionalParams: any[]) {
    if (this.logLevel === 'production' || this.logLevel === 'error') return;
    console.debug(colors.cyan(`${this.name}${message}`), ...optionalParams);
  }
  public info(message: any, ...optionalParams: any[]) {
    if (this.logLevel === 'error') return;
    console.info(colors.green(`${this.name}${message}`), ...optionalParams);
  }
  public error(message: any, ...optionalParams: any[]) {
    console.error(colors.red(`${this.name}${message}`), ...optionalParams);
  }

  public time(label = '') {
    console.time(colors.green(`${this.name}${label}`));
  }
  public timeLog(label = '') {
    console.timeLog(colors.green(`${this.name}${label}`));
  }
  public timeEnd(label = '') {
    console.timeEnd(colors.green(`${this.name}${label}`));
  }
}
