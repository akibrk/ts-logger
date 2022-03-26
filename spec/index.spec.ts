import { Logger } from '../src/index';

describe('LoggerTest', () => {
  const logger = new Logger('test');
  test('Logger Name', () => {
    expect(logger.name === 'test');
  });
  test('Log()', () => {
    expect(logger.log('stuff')).toBeUndefined();
  });
});
