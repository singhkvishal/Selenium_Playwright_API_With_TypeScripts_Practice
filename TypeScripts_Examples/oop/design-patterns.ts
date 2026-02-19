/**
 * design-patterns.ts — tiny Factory and Singleton examples
 */
export {};

// Simple Factory
class Logger {
  constructor(public prefix = '') {}
  log(msg: string) { console.log(`${this.prefix}${msg}`); }
}

class LoggerFactory {
  static create(prefix?: string) { return new Logger(prefix); }
}

const log = LoggerFactory.create('[app] ');
log.log('started');

// Simple Singleton (module-level instance)
class Config {
  private constructor(public readonly env: string) {}
  static instance: Config | null = null;
  static getInstance() { return this.instance ??= new Config(process.env.NODE_ENV ?? 'dev'); }
}

const cfg = Config.getInstance();
console.log('env', cfg.env);
