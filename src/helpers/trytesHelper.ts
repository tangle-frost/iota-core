import { StringHelper } from "./stringHelper";

/**
 * Class to manipulate Trytes.
 */
export class TrytesHelper {
    /**
     * All the characters that can be used in trytes.
     */
    public static ALPHABET: string = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /**
     * Convert a string value into trytes.
     * @param value The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    public static to(value: string): string {
        let trytes = "";

        if (StringHelper.isEmpty(value)) {
            throw new Error(`The value can not be empty`);
        }

        for (let i = 0; i < value.length; i++) {
            const asciiValue = value.charCodeAt(i);

            const firstValue = asciiValue % 27;
            const secondValue = (asciiValue - firstValue) / 27;

            trytes += TrytesHelper.ALPHABET[firstValue] + TrytesHelper.ALPHABET[secondValue];
        }

        return trytes;
    }

    /**
     * Convert trytes into a string value.
     * @param trytes The trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    public static from(trytes: string): string {
        let ascii = "";

        if (StringHelper.isEmpty(trytes)) {
            throw new Error(`The trytes can not be empty`);
        }

        if (trytes.length % 2 === 1) {
            throw new Error(`The trytes length must be an even number, it is ${trytes.length}`);
        }

        if (!TrytesHelper.isTrytes(trytes)) {
            throw new Error("The trytes contains non-tryte characters");
        }

        for (let i = 0; i < trytes.length; i += 2) {
            const firstValue = TrytesHelper.ALPHABET.indexOf(trytes[i]);
            const secondValue = TrytesHelper.ALPHABET.indexOf(trytes[i + 1]);

            const decimalValue = firstValue + secondValue * 27;

            ascii += String.fromCharCode(decimalValue);
        }

        return ascii;
    }

    /**
     * Check to make sure all the characters in the string are tryte characters.
     * @param trytes To check for validity.
     * @returns true if the trytes are valid.
     */
    public static isTrytes(trytes: string): boolean {
        return trytes !== null && trytes !== undefined && /^[9A-Z]+$/.test(trytes);
    }
}
