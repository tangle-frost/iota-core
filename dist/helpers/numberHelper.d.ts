/**
 * Number helper methods.
 */
export declare class NumberHelper {
    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    static isInteger(value: any): value is Number;
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    static isNumber(value: any): value is Number;
}
