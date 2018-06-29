/**
 * Class to manipulate Trytes.
 */
export declare class TrytesHelper {
    /**
     * All the characters that can be used in trytes.
     */
    static ALPHABET: string;
    /**
     * Convert a string value into trytes.
     * @param ascii The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    static to(ascii: string): string;
    /**
     * Convert trytes into a string value.
     * @param trytes The trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    static from(trytes: string): string;
    /**
     * Check to make sure all the characters in the strin are tryte characters.
     * @param trytes To check for validity.
     * @returns true if the trytes are valid.
     */
    static isTrytes(trytes: string): boolean;
}
