/**
 * Read full line
 *
 * @param {string} promptText question text
 *
 * @return {string}
 */
export declare function nextLine(promptText?: string): string;
/**
 * Alias for nextLine(promptText)
 *
 * @param {string} promptText question text
 *
 * @return {string}
 */
export declare function prompt(promptText: string): string;
/**
 * Read next word from input line
 *
 * @return {string}
 */
export declare function next(): string;
/**
 * Read next Integer number from input line
 *
 * @param {number} radix number radix
 *
 * @throws {Error} if failed to convert to Integer
 *
 * @return {number}
 */
export declare function nextInt(radix?: number): number;
/**
 * Read next Float number from input line
 *
 * @throws {Error} if failed to convert to Float
 *
 * @return {number}
 */
export declare function nextFloat(): number;
