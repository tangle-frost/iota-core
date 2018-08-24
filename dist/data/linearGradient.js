Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("../helpers/arrayHelper");
const numberHelper_1 = require("../helpers/numberHelper");
const objectHelper_1 = require("../helpers/objectHelper");
/**
 * Class to represent a linear gradient.
 */
class LinearGradient {
    /**
     * Create a new instance of linear gradient.
     * @param stops The stop for the gradient.
     * @param angle The angle for the gradient.
     */
    constructor(stops, angle) {
        if (!arrayHelper_1.ArrayHelper.isArray(stops)) {
            throw new Error("The stops array must not be empty");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(angle) && !numberHelper_1.NumberHelper.isInteger(angle)) {
            throw new Error("The angle must be a number");
        }
        this._stops = stops;
        this._angle = angle;
    }
    /**
     * Get the stops.
     * @returns The stops.
     */
    stops() {
        return this._stops;
    }
    /**
     * Get the angle.
     * @returns The angle.
     */
    angle() {
        return this._angle;
    }
}
exports.LinearGradient = LinearGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyR3JhZGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9saW5lYXJHcmFkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0RBQXFEO0FBQ3JELDBEQUF1RDtBQUN2RCwwREFBdUQ7QUFHdkQ7O0dBRUc7QUFDSCxNQUFhLGNBQWM7SUFNdkI7Ozs7T0FJRztJQUNILFlBQVksS0FBK0MsRUFBRSxLQUFjO1FBQ3ZFLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRSxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUF0Q0Qsd0NBc0NDIn0=