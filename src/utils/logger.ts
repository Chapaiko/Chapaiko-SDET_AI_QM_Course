// path: src/utils/logger.ts
/**
 * Provides a small console logger with consistent log formatting.
 */
export class Logger {
  /**
   * Writes an informational message to stdout.
   *
   * @param message The message to print.
   * @param context Additional structured context for the log entry.
   */
  public static info(message: string, context?: Record<string, unknown>): void {
    console.info(this.format('INFO', message, context));
  }

  /**
   * Writes a warning message to stdout.
   *
   * @param message The message to print.
   * @param context Additional structured context for the log entry.
   */
  public static warn(message: string, context?: Record<string, unknown>): void {
    console.warn(this.format('WARN', message, context));
  }

  /**
   * Writes an error message to stderr.
   *
   * @param message The message to print.
   * @param context Additional structured context for the log entry.
   */
  public static error(message: string, context?: Record<string, unknown>): void {
    console.error(this.format('ERROR', message, context));
  }

  private static format(
    level: 'INFO' | 'WARN' | 'ERROR',
    message: string,
    context?: Record<string, unknown>
  ): string {
    const timestamp = new Date().toISOString();
    const serializedContext = context ? ` ${JSON.stringify(context)}` : '';

    return `[${timestamp}] [${level}] ${message}${serializedContext}`;
  }
}
