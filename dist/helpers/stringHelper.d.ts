/**
 * Class to maniuplate Strings.
 */
export declare class StringHelper {
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    static encodeNonASCII(value: string): string;
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */
    static decodeNonASCII(value: string): string;
    /**
     * Check to see if the whole string is ASCII.
     * @param value The value to check.
     * @returns True if all the characters are ascii.
     */
    static isASCII(value: string): boolean;
}
