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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9jb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUV2RDs7R0FFRztBQUNILE1BQWEsS0FBSztJQVVkOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBYSxFQUFFLEdBQVcsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUMvRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFXO1FBQzdCLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQztRQUNULElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTztZQUN4QyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVE7WUFDaEQsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsVUFBVTtZQUNsRCxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFBTSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVk7WUFDcEQsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLG9GQUFvRixDQUFDLENBQUM7U0FDekc7UUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksR0FBRztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSTtRQUNQLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJO1FBQ1AsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU87UUFDVixPQUFPLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzFHLENBQUM7SUFFRDs7O09BR0c7SUFDSSxHQUFHO1FBQ04sTUFBTSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVk7UUFDZixNQUFNLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQW5LRCxzQkFtS0MifQ==