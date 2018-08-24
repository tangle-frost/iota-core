import { ArrayHelper } from "../helpers/arrayHelper";
import { NumberHelper } from "../helpers/numberHelper";
import { ObjectHelper } from "../helpers/objectHelper";
import { Color } from "./color";

/**
 * Class to represent a radial gradient.
 */
export class RadialGradient {
    /* @internal */
    private readonly _stops: { color: Color; offsetPercent: number}[];
    /* @internal */
    private readonly _offsetXPercent: number;
    /* @internal */
    private readonly _offsetYPercent: number;
    /* @internal */
    private readonly _radiusPercent: number;

    /**
     * Create a new instance of radial gradient.
     * @param stops The stop for the gradient.
     * @param offsetXPercent The offsetXPercent for the gradient.
     * @param offsetYPercent The offsetYPercent for the gradient.
     * @param radiusPercent The radiusPercent for the gradient.
     */
    constructor(stops: { color: Color; offsetPercent: number}[], offsetXPercent?: number, offsetYPercent?: number, radiusPercent?: number) {
        if (!ArrayHelper.isArray(stops)) {
            throw new Error("The stops array must not be empty");
        }
        if (!ObjectHelper.isEmpty(offsetXPercent) && !NumberHelper.isInteger(offsetXPercent)) {
            throw new Error("The offsetXPercent must be a number");
        }
        if (!ObjectHelper.isEmpty(offsetYPercent) && !NumberHelper.isInteger(offsetYPercent)) {
            throw new Error("The offsetYPercent must be a number");
        }
        if (!ObjectHelper.isEmpty(radiusPercent) && !NumberHelper.isInteger(radiusPercent)) {
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
    public stops(): { color: Color; offsetPercent: number}[] {
        return this._stops;
    }

    /**
     * Get the offsetXPercent.
     * @returns The offsetXPercent.
     */
    public offsetXPercent(): number {
        return this._offsetXPercent;
    }

    /**
     * Get the offsetYPercent.
     * @returns The offsetYPercent.
     */
    public offsetYPercent(): number {
        return this._offsetYPercent;
    }

    /**
     * Get the radiusPercent.
     * @returns The radiusPercent.
     */
    public radiusPercent(): number {
        return this._radiusPercent;
    }
}
