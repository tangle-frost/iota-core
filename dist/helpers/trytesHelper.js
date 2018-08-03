Object.defineProperty(exports, "__esModule", { value: true });
const stringHelper_1 = require("./stringHelper");
/**
 * Class to manipulate Trytes.
 */
class TrytesHelper {
    /**
     * Convert a string value into trytes.
     * @param value The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    static to(value) {
        let trytes = "";
        if (stringHelper_1.StringHelper.isEmpty(value)) {
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
    static from(trytes) {
        let ascii = "";
        if (stringHelper_1.StringHelper.isEmpty(trytes)) {
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
     * Check to make sure all the characters in the strin are tryte characters.
     * @param trytes To check for validity.
     * @returns true if the trytes are valid.
     */
    static isTrytes(trytes) {
        return trytes !== null && trytes !== undefined && /^[9A-Z]+$/.test(trytes);
    }
}
/**
 * All the characters that can be used in trytes.
 */
TrytesHelper.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.TrytesHelper = TrytesHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvdHJ5dGVzSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBOEM7QUFFOUM7O0dBRUc7QUFDSCxNQUFhLFlBQVk7SUFNckI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBYTtRQUMxQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDakQ7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRW5ELE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEY7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYztRQUM3QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZGO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakUsTUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFFbkQsS0FBSyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBYztRQUNqQyxPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9FLENBQUM7O0FBcEVEOztHQUVHO0FBQ1cscUJBQVEsR0FBVyw2QkFBNkIsQ0FBQztBQUpuRSxvQ0FzRUMifQ==