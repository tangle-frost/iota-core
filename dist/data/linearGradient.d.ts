import { Color } from "./color";
/**
 * Class to represent a linear gradient.
 */
export declare class LinearGradient {
    /**
     * Create a new instance of linear gradient.
     * @param stops The stop for the gradient.
     * @param angle The angle for the gradient.
     */
    constructor(stops: {
        color: Color;
        offsetPercent: number;
    }[], angle?: number);
    /**
     * Get the stops.
     * @returns The stops.
     */
    stops(): {
        color: Color;
        offsetPercent: number;
    }[];
    /**
     * Get the angle.
     * @returns The angle.
     */
    angle(): number;
}
