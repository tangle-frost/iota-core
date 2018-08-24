import { ArrayHelper } from "../helpers/arrayHelper";
import { NumberHelper } from "../helpers/numberHelper";
import { ObjectHelper } from "../helpers/objectHelper";
import { Color } from "./color";

/**
 * Class to represent a linear gradient.
 */
export class LinearGradient {
    /* @internal */
    private readonly _stops: { color: Color; offsetPercent: number}[];
    /* @internal */
    private readonly _angle: number;

    /**
     * Create a new instance of linear gradient.
     * @param stops The stop for the gradient.
     * @param angle The angle for the gradient.
     */
    constructor(stops: { color: Color; offsetPercent: number}[], angle?: number) {
        if (!ArrayHelper.isArray(stops)) {
            throw new Error("The stops array must not be empty");
        }
        if (!ObjectHelper.isEmpty(angle) && !NumberHelper.isInteger(angle)) {
            throw new Error("The angle must be a number");
        }

        this._stops = stops;
        this._angle = angle;
    }

    /**
     * Get the stops.
     * @returns The stops.
     */
    public stops(): { color: Color; offsetPercent: number}[] {
        return this._stops;
    }

    /**
     * Get the angle.
     * @returns The angle.
     */
    public angle(): number {
        return this._angle;
    }
}
