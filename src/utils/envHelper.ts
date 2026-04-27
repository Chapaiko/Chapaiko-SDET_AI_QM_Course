// path: src/utils/envHelper.ts
import dotenv from 'dotenv';

dotenv.config();

/**
 * Exposes typed helpers for reading environment variables.
 */
export class EnvHelper {
  /**
   * Reads a string environment variable.
   *
   * @param key The environment variable name.
   * @param defaultValue A fallback value when the variable is not set.
   * @returns The resolved string value.
   */
  public static getString(key: string, defaultValue = ''): string {
    return process.env[key] ?? defaultValue;
  }

  /**
   * Reads a numeric environment variable.
   *
   * @param key The environment variable name.
   * @param defaultValue A fallback value when the variable is not set or invalid.
   * @returns The resolved numeric value.
   */
  public static getNumber(key: string, defaultValue: number): number {
    const rawValue = process.env[key];

    if (!rawValue) {
      return defaultValue;
    }

    const parsedValue = Number(rawValue);

    return Number.isNaN(parsedValue) ? defaultValue : parsedValue;
  }

  /**
   * Reads a boolean environment variable.
   *
   * @param key The environment variable name.
   * @param defaultValue A fallback value when the variable is not set.
   * @returns The resolved boolean value.
   */
  public static getBoolean(key: string, defaultValue = false): boolean {
    const rawValue = process.env[key];

    if (!rawValue) {
      return defaultValue;
    }

    return rawValue.toLowerCase() === 'true';
  }
}
