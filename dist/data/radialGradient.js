Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("../helpers/arrayHelper");
const numberHelper_1 = require("../helpers/numberHelper");
const objectHelper_1 = require("../helpers/objectHelper");
/**
 * Class to represent a radial gradient.
 */
class RadialGradient {
    /**
     * Create a new instance of radial gradient.
     * @param stops The stop for the gradient.
     * @param offsetXPercent The offsetXPercent for the gradient.
     * @param offsetYPercent The offsetYPercent for the gradient.
     * @param radiusPercent The radiusPercent for the gradient.
     */
    constructor(stops, offsetXPercent, offsetYPercent, radiusPercent) {
        if (!arrayHelper_1.ArrayHelper.isArray(stops)) {
            throw new Error("The stops array must not be empty");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(offsetXPercent) && !numberHelper_1.NumberHelper.isInteger(offsetXPercent)) {
            throw new Error("The offsetXPercent must be a number");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(offsetYPercent) && !numberHelper_1.NumberHelper.isInteger(offsetYPercent)) {
            throw new Error("The offsetYPercent must be a number");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(radiusPercent) && !numberHelper_1.NumberHelper.isInteger(radiusPercent)) {
            throw new Error("The radiusPercent must be a number");
        }
        this._stops = stops;
        this._offsetXPercent = offsetXPercent;
        this._offsetYPercent = offsetYPercent;
        this._radiusPercent = radiusPercent;
    }
    /**
     * Get the stops.
     * @returns The stops.
     */
    stops() {
        return this._stops;
    }
    /**
     * Get the offsetXPercent.
     * @returns The offsetXPercent.
     */
    offsetXPercent() {
        return this._offsetXPercent;
    }
    /**
     * Get the offsetYPercent.
     * @returns The offsetYPercent.
     */
    offsetYPercent() {
        return this._offsetYPercent;
    }
    /**
     * Get the radiusPercent.
     * @returns The radiusPercent.
     */
    radiusPercent() {
        return this._radiusPercent;
    }
}
exports.RadialGradient = RadialGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsR3JhZGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9yYWRpYWxHcmFkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0RBQXFEO0FBQ3JELDBEQUF1RDtBQUN2RCwwREFBdUQ7QUFHdkQ7O0dBRUc7QUFDSCxNQUFhLGNBQWM7SUFVdkI7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUErQyxFQUFFLGNBQXVCLEVBQUUsY0FBdUIsRUFBRSxhQUFzQjtRQUNqSSxJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDaEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBcEVELHdDQW9FQyJ9