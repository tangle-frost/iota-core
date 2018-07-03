Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("../helpers/numberHelper");
const stringHelper_1 = require("../helpers/stringHelper");
/**
 * Class to represent a color.
 */
class Color {
    /**
     * Create a new instance of color.
     * @param alpha The alpha element of the color.
     * @param red The red element of the color.
     * @param green The green element of the color.
     * @param blue The blue element of the color.
     */
    constructor(alpha, red, green, blue) {
        if (!numberHelper_1.NumberHelper.isInteger(alpha) || alpha < 0 || alpha > 255) {
            throw new Error("The alpha parameter must be a number >= 0 and <= 255");
        }
        if (!numberHelper_1.NumberHelper.isInteger(red) || red < 0 || red > 255) {
            throw new Error("The red parameter must be a number >= 0 and <= 255");
        }
        if (!numberHelper_1.NumberHelper.isInteger(green) || green < 0 || green > 255) {
            throw new Error("The green parameter must be a number >= 0 and <= 255");
        }
        if (!numberHelper_1.NumberHelper.isInteger(blue) || blue < 0 || blue > 255) {
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
    static fromHex(hex) {
        if (!stringHelper_1.StringHelper.isString(hex)) {
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
        }
        else if (/^#[A-Fa-f0-9]{4}$/.test(hex)) { // #ARGB
            alpha = hex.substr(1, 1).repeat(2);
            red = hex.substr(2, 1).repeat(2);
            green = hex.substr(3, 1).repeat(2);
            blue = hex.substr(4, 1).repeat(2);
        }
        else if (/^#[A-Fa-f0-9]{6}$/.test(hex)) { // #RRGGBB
            alpha = "0xFF";
            red = hex.substr(1, 2);
            green = hex.substr(3, 2);
            blue = hex.substr(5, 2);
        }
        else if (/^#[A-Fa-f0-9]{8}$/.test(hex)) { // #AARRGGBB
            alpha = hex.substr(1, 2);
            red = hex.substr(3, 2);
            green = hex.substr(5, 2);
            blue = hex.substr(7, 2);
        }
        else {
            throw new Error("The hex color must be one of the following formats #RGB, #ARGB, #RRGGBB, #AARRGGBB");
        }
        return new Color(parseInt(alpha, 16), parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16));
    }
    /**
     * Get the alpha element.
     * @returns The alpha element.
     */
    alpha() {
        return this._alpha;
    }
    /**
     * Get the red element.
     * @returns The red element.
     */
    red() {
        return this._red;
    }
    /**
     * Get the green element.
     * @returns The green element.
     */
    green() {
        return this._green;
    }
    /**
     * Get the blue element.
     * @returns The blue element.
     */
    blue() {
        return this._blue;
    }
    /**
     * Get color as argb.
     * @returns The color as argb.
     */
    argb() {
        return ((this._alpha << 24) | (this._red << 16) | (this._green << 8) | this._blue) >>> 0;
    }
    /**
     * Get color as rgba.
     * @returns The color as rgba.
     */
    rgba() {
        return ((this._red << 24) | (this._green << 16) | (this._blue << 8) | this._alpha) >>> 0;
    }
    /**
     * Get color as rgb text.
     * @returns The color as rgb.
     */
    rgbText() {
        return `rgb(${this._red},${this._green},${this._blue})`;
    }
    /**
     * Get color as rgba text.
     * @returns The color as rgba.
     */
    rgbaText() {
        return `rgba(${this._red},${this._green},${this._blue},${Math.round(this._alpha / 255 * 100) / 100})`;
    }
    /**
     * Get color as hex no alpha.
     * @returns The color as hex with no alpha component.
     */
    hex() {
        const red = `00${this._red.toString(16)}`.slice(-2);
        const green = `00${this._green.toString(16)}`.slice(-2);
        const blue = `00${this._blue.toString(16)}`.slice(-2);
        return `#${red}${green}${blue}`.toUpperCase();
    }
    /**
     * Get color as hex with alpha.
     * @returns The color as hex with with alpha component.
     */
    hexWithAlpha() {
        const alpha = `00${this._alpha.toString(16)}`.slice(-2);
        const red = `00${this._red.toString(16)}`.slice(-2);
        const green = `00${this._green.toString(16)}`.slice(-2);
        const blue = `00${this._blue.toString(16)}`.slice(-2);
        return `#${alpha}${red}${green}${blue}`.toUpperCase();
    }
}
exports.Color = Color;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9jb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUV2RDs7R0FFRztBQUNIO0lBVUk7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFhLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQy9ELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDekU7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7WUFDekQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUss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