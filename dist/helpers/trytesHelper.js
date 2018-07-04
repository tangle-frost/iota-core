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
        if (value) {
            if (!stringHelper_1.StringHelper.isASCII(value)) {
                throw new Error(`The value contains non ASCII characters`);
            }
            for (let i = 0; i < value.length; i++) {
                const asciiValue = value.charCodeAt(i);
                const firstValue = asciiValue % 27;
                const secondValue = (asciiValue - firstValue) / 27;
                trytes += TrytesHelper.ALPHABET[firstValue] + TrytesHelper.ALPHABET[secondValue];
            }
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
        if (trytes) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvdHJ5dGVzSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBOEM7QUFFOUM7O0dBRUc7QUFDSDtJQU1JOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7YUFDOUQ7WUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdkMsTUFBTSxVQUFVLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUVuRCxNQUFNLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYztRQUM3QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUN2RjtZQUVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDL0Q7WUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqRSxNQUFNLFlBQVksR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFFbkQsS0FBSyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUM7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFjO1FBQ2pDLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7QUFwRUQ7O0dBRUc7QUFDVyxxQkFBUSxHQUFXLDZCQUE2QixDQUFDO0FBSm5FLG9DQXNFQyJ9