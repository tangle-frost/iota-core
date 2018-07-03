import { NumberHelper } from "../helpers/numberHelper";
import { StringHelper } from "../helpers/stringHelper";

/**
 * Class to represent a color.
 */
export class Color {
    /* @internal */
    private readonly _alpha: number;
    /* @internal */
    private readonly _red: number;
    /* @internal */
    private readonly _green: number;
    /* @internal */
    private readonly _blue: number;

    /**
     * Create a new instance of color.
     * @param alpha The alpha element of the color.
     * @param red The red element of the color.
     * @param green The green element of the color.
     * @param blue The blue element of the color.
     */
    constructor(alpha: number, red: number, green: number, blue: number) {
        if (!NumberHelper.isInteger(alpha) || alpha < 0 || alpha > 255) {
            throw new Error("The alpha parameter must be a number >= 0 and <= 255");
        }
        if (!NumberHelper.isInteger(red) || red < 0 || red > 255) {
            throw new Error("The red parameter must be a number >= 0 and <= 255");
        }
        if (!NumberHelper.isInteger(green) || green < 0 || green > 255) {
            throw new Error("The green parameter must be a number >= 0 and <= 255");
        }
        if (!NumberHelper.isInteger(blue) || blue < 0 || blue > 255) {
            throw new Error("The blue parameter must be a number >= 0 and <= 255");
        }

        this._alpha = alpha;
        this._red = red;
        this._green = green;
        this._blue = blue;
    }

    /**
     * Construct a color from a hex string.
     * @param hex The hex string to parse.
     * @returns The color.
     */
    public static fromHex(hex: string): Color {
        if (!StringHelper.isString(hex)) {
            throw new Error("The hex parameter can not be empty");
        }

        let alpha;
        let red;
        let green;
        let blue;
        if (/^#[A-Fa-f0-9]{3}$/.test(hex)) { // #RGB
            alpha = "0xFF";
            red = hex.substr(1, 1).repeat(2);
            green = hex.substr(2, 1).repeat(2);
            blue = hex.substr(3, 1).repeat(2);
        } else if (/^#[A-Fa-f0-9]{4}$/.test(hex)) { // #ARGB
            alpha = hex.substr(1, 1).repeat(2);
            red = hex.substr(2, 1).repeat(2);
            green = hex.substr(3, 1).repeat(2);
            blue = hex.substr(4, 1).repeat(2);
        } else if (/^#[A-Fa-f0-9]{6}$/.test(hex)) { // #RRGGBB
            alpha = "0xFF";
            red = hex.substr(1, 2);
            green = hex.substr(3, 2);
            blue = hex.substr(5, 2);
        } else if (/^#[A-Fa-f0-9]{8}$/.test(hex)) { // #AARRGGBB
            alpha = hex.substr(1, 2);
            red = hex.substr(3, 2);
            green = hex.substr(5, 2);
            blue = hex.substr(7, 2);
        } else {
            throw new Error("The hex color must be one of the following formats #RGB, #ARGB, #RRGGBB, #AARRGGBB");
        }
        return new Color(parseInt(alpha, 16), parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16));
    }

    /**
     * Get the alpha element.
     * @returns The alpha element.
     */
    public alpha(): number {
        return this._alpha;
    }

    /**
     * Get the red element.
     * @returns The red element.
     */
    public red(): number {
        return this._red;
    }

    /**
     * Get the green element.
     * @returns The green element.
     */
    public green(): number {
        return this._green;
    }

    /**
     * Get the blue element.
     * @returns The blue element.
     */
    public blue(): number {
        return this._blue;
    }

    /**
     * Get color as argb.
     * @returns The color as argb.
     */
    public argb(): number {
        return ((this._alpha << 24) | (this._red << 16) | (this._green << 8) | this._blue) >>> 0;
    }

    /**
     * Get color as rgba.
     * @returns The color as rgba.
     */
    public rgba(): number {
        return ((this._red << 24) | (this._green << 16) | (this._blue << 8) | this._alpha) >>> 0;
    }

    /**
     * Get color as rgb text.
     * @returns The color as rgb.
     */
    public rgbText(): string {
        return `rgb(${this._red},${this._green},${this._blue})`;
    }

    /**
     * Get color as rgba text.
     * @returns The color as rgba.
     */
    public rgbaText(): string {
        return `rgba(${this._red},${this._green},${this._blue},${Math.round(this._alpha / 255 * 100) / 100})`;
    }

    /**
     * Get color as hex no alpha.
     * @returns The color as hex with no alpha component.
     */
    public hex(): string {
        const red = `00${this._red.toString(16)}`.slice(-2);
        const green = `00${this._green.toString(16)}`.slice(-2);
        const blue = `00${this._blue.toString(16)}`.slice(-2);
        return `#${red}${green}${blue}`.toUpperCase();
    }

    /**
     * Get color as hex with alpha.
     * @returns The color as hex with with alpha component.
     */
    public hexWithAlpha(): string {
        const alpha = `00${this._alpha.toString(16)}`.slice(-2);
        const red = `00${this._red.toString(16)}`.slice(-2);
        const green = `00${this._green.toString(16)}`.slice(-2);
        const blue = `00${this._blue.toString(16)}`.slice(-2);
        return `#${alpha}${red}${green}${blue}`.toUpperCase();
    }
}
