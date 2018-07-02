/**
 * Number helper methods.
 */
export class NumberHelper {
    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    public static isInteger(value: any): value is Number {
        return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }

    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    public static isNumber(value: any): value is Number {
        return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
}
