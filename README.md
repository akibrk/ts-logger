# Logger

Logger for typescript

## Usage

```ts
import { Logger } from '@akibrk/logger';
_logger = new Logger('main.ts');

_logger.log('Hello, Main');
```

## Log Levels

- development
- production
- error

Default is development, debug will be disabled in production mode.

You can set the logLevel by `logger.logLevel = 'environment'`
