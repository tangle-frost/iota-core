/**
 * Class to represent a color.
 */
export declare class Color {
    /**
     * Create a new instance of color.
     * @param alpha The alpha element of the color.
     * @param red The red element of the color.
     * @param green The green element of the color.
     * @param blue The blue element of the color.
     */
    constructor(alpha: number, red: number, green: number, blue: number);
    /**
     * Construct a color from a hex string.
     * @param hex The hex string to parse.
     * @returns The color.
     */
    static fromHex(hex: string): Color;
    /**
     * Get the alpha element.
     * @returns The alpha element.
     */
    alpha(): number;
    /**
     * Get the red element.
     * @returns The red element.
     */
    red(): number;
    /**
     * Get the green element.
     * @returns The green element.
     */
    green(): number;
    /**
     * Get the blue element.
     * @returns The blue element.
     */
    blue(): number;
    /**
     * Get color as argb.
     * @returns The color as argb.
     */
    argb(): number;
    /**
     * Get color as rgba.
     * @returns The color as rgba.
     */
    rgba(): number;
    /**
     * Get color as rgb text.
     * @returns The color as rgb.
     */
    rgbText(): string;
    /**
     * Get color as rgba text.
     * @returns The color as rgba.
     */
    rgbaText(): string;
    /**
     * Get color as hex no alpha.
     * @returns The color as hex with no alpha component.
     */
    hex(): string;
    /**
     * Get color as hex with alpha.
     * @returns The color as hex with with alpha component.
     */
    hexWithAlpha(): string;
}
