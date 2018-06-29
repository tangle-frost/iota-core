/**
 * Class to maniuplate Strings.
 */
export class StringHelper {
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    public static encodeNonASCII(value: string): string {
        return value !== null && value !== undefined ?
            value.replace(/[\u0100-\uFFFF]/g, (chr) => `\\u${(`0000${chr.charCodeAt(0).toString(16)}`).substr(-4)}`) : undefined;
    }

    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */
    public static decodeNonASCII(value: string): string {
        return value !== null && value !== undefined ?
            value.replace(/\\u([\d\w]{4})/gi, (match, grp) => String.fromCharCode(parseInt(grp, 16))) : undefined;
    }

    /**
     * Check to see if the whole string is ASCII.
     * @param value The value to check.
     * @returns True if all the characters are ascii.
     */
    public static isASCII(value: string): boolean {
        return value !== null && value !== undefined
             && /^[\u0000-\u00FF]*$/.test(value);
    }
}
