import { Color } from "./color";
/**
 * Class to represent a radial gradient.
 */
export declare class RadialGradient {
    /**
     * Create a new instance of radial gradient.
     * @param stops The stop for the gradient.
     * @param offsetXPercent The offsetXPercent for the gradient.
     * @param offsetYPercent The offsetYPercent for the gradient.
     * @param radiusPercent The radiusPercent for the gradient.
     */
    constructor(stops: {
        color: Color;
        offsetPercent: number;
    }[], offsetXPercent?: number, offsetYPercent?: number, radiusPercent?: number);
    /**
     * Get the stops.
     * @returns The stops.
     */
    stops(): {
        color: Color;
        offsetPercent: number;
    }[];
    /**
     * Get the offsetXPercent.
     * @returns The offsetXPercent.
     */
    offsetXPercent(): number;
    /**
     * Get the offsetYPercent.
     * @returns The offsetYPercent.
     */
    offsetYPercent(): number;
    /**
     * Get the radiusPercent.
     * @returns The radiusPercent.
     */
    radiusPercent(): number;
}
