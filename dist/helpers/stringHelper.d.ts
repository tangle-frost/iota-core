/**
 * String helper methods.
 */
export declare class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    static isString(value: any): value is string;
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the string all ASCII characters.
     * @param value string to test if it is ASCII.
     * @returns True if the object is all ASCII.
     */
    static isASCII(value: string): boolean;
    /**
     * Is the string all printable characters, including tab, carriage return and line feed.
     * @param value string to test if it is printabl.
     * @returns True if the object is all printable
     */
    static isPrintable(value: string): boolean;
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
}
