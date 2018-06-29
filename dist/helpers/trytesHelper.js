Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class to manipulate Trytes.
 */
class TrytesHelper {
    /**
     * Convert a string value into trytes.
     * @param ascii The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    static to(ascii) {
        let trytes = "";
        if (ascii) {
            for (let i = 0; i < ascii.length; i++) {
                const charCode = ascii.charCodeAt(i);
                if (charCode > 255) {
                    throw new Error(`Can not convert non ASCII characters to trytes, charCode ${charCode}`);
                }
                const firstValue = charCode % 27;
                const secondValue = (charCode - firstValue) / 27;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvdHJ5dGVzSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNIO0lBTUk7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBYTtRQUMxQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFckMsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO29CQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUMzRjtnQkFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRWpELE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEY7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFjO1FBQzdCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZGO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUMvRDtZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpFLE1BQU0sWUFBWSxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUVuRCxLQUFLLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM5QztTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQWM7UUFDakMsT0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRSxDQUFDOztBQXBFRDs7R0FFRztBQUNXLHFCQUFRLEdBQVcsNkJBQTZCLENBQUM7QUFKbkUsb0NBc0VDIn0=