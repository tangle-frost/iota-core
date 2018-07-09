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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvdHJ5dGVzSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBOEM7QUFFOUM7O0dBRUc7QUFDSDtJQU1JOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxNQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ25DLE1BQU0sV0FBVyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVuRCxNQUFNLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQWM7UUFDN0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN2RjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUMvRDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpFLE1BQU0sWUFBWSxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBRW5ELEtBQUssSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQWM7UUFDakMsT0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRSxDQUFDOztBQXBFRDs7R0FFRztBQUNXLHFCQUFRLEdBQVcsNkJBQTZCLENBQUM7QUFKbkUsb0NBc0VDIn0=