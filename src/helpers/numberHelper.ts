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
        return typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value) && Math.floor(value) === value;
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
