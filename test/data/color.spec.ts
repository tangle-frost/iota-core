/**
 * Tests for Color.
 */
import * as chai from "chai";
import { Color } from "../../src/data/color";

describe("Color", () => {
    it("can be created", () => {
        const obj = new Color(0x01, 0x02, 0x03, 0x04);
        chai.should().exist(obj);
        chai.expect(obj.alpha()).to.equal(0x01);
        chai.expect(obj.red()).to.equal(0x02);
        chai.expect(obj.green()).to.equal(0x03);
        chai.expect(obj.blue()).to.equal(0x04);
    });

    it("can fail with invalid alpha too small", () => {
        chai.expect(() => new Color(-1, 0x02, 0x03, 0x04)).to.throw("alpha");
    });

    it("can fail with invalid alpha too large", () => {
        chai.expect(() => new Color(256, 0x02, 0x03, 0x04)).to.throw("alpha");
    });

    it("can fail with invalid red too small", () => {
        chai.expect(() => new Color(0x01, -1, 0x03, 0x04)).to.throw("red");
    });

    it("can fail with invalid red too large", () => {
        chai.expect(() => new Color(0x01, 256, 0x03, 0x04)).to.throw("red");
    });

    it("can fail with invalid green too small", () => {
        chai.expect(() => new Color(0x01, 0x02, -1, 0x04)).to.throw("green");
    });

    it("can fail with invalid green too large", () => {
        chai.expect(() => new Color(0x01, 0x02, 256, 0x04)).to.throw("green");
    });

    it("can fail with invalid blue too small", () => {
        chai.expect(() => new Color(0x01, 0x02, 0x03, -1)).to.throw("blue");
    });

    it("can fail with invalid blue too large", () => {
        chai.expect(() => new Color(0x01, 0x02, 0x03, 256)).to.throw("blue");
    });

    describe("fromHex", () => {
        it("can fail with no string", () => {
            chai.expect(() => Color.fromHex(undefined)).to.throw("can not be empty");
        });

        it("can fail with no #", () => {
            chai.expect(() => Color.fromHex("ABC")).to.throw("must be one");
        });

        it("can fail when too short", () => {
            chai.expect(() => Color.fromHex("#C")).to.throw("must be one");
        });

        it("can fail when too long", () => {
            chai.expect(() => Color.fromHex("#AABBCCDDEE")).to.throw("must be one");
        });

        it("can fail when invalid length", () => {
            chai.expect(() => Color.fromHex("#ABCDE")).to.throw("must be one");
        });

        it("can fail when non hex", () => {
            chai.expect(() => Color.fromHex("#PPP")).to.throw("must be one");
        });

        it("succeed with 3 chars", () => {
            const obj = Color.fromHex("#ABC");
            chai.expect(obj.alpha()).to.equal(0xFF);
            chai.expect(obj.red()).to.equal(0xAA);
            chai.expect(obj.green()).to.equal(0xBB);
            chai.expect(obj.blue()).to.equal(0xCC);
        });

        it("succeed with 4 chars", () => {
            const obj = Color.fromHex("#9ABC");
            chai.expect(obj.alpha()).to.equal(0x99);
            chai.expect(obj.red()).to.equal(0xAA);
            chai.expect(obj.green()).to.equal(0xBB);
            chai.expect(obj.blue()).to.equal(0xCC);
        });

        it("succeed with 6 chars", () => {
            const obj = Color.fromHex("#ABCDEF");
            chai.expect(obj.alpha()).to.equal(0xFF);
            chai.expect(obj.red()).to.equal(0xAB);
            chai.expect(obj.green()).to.equal(0xCD);
            chai.expect(obj.blue()).to.equal(0xEF);
        });

        it("succeed with 8 chars", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.alpha()).to.equal(0x98);
            chai.expect(obj.red()).to.equal(0xAB);
            chai.expect(obj.green()).to.equal(0xCD);
            chai.expect(obj.blue()).to.equal(0xEF);
        });
    });

    describe("argb", () => {
        it("can succeed", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.alpha()).to.equal(0x98);
            chai.expect(obj.red()).to.equal(0xAB);
            chai.expect(obj.green()).to.equal(0xCD);
            chai.expect(obj.blue()).to.equal(0xEF);
            chai.expect(obj.argb()).to.equal(0x98ABCDEF);
        });
    });

    describe("rgba", () => {
        it("can succeed", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.alpha()).to.equal(0x98);
            chai.expect(obj.red()).to.equal(0xAB);
            chai.expect(obj.green()).to.equal(0xCD);
            chai.expect(obj.blue()).to.equal(0xEF);
            chai.expect(obj.rgba()).to.equal(0xABCDEF98);
        });
    });

    describe("rgbText", () => {
        it("can succeed", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.rgbText()).to.equal("rgb(171,205,239)");
        });
    });

    describe("rgbaText", () => {
        it("can succeed with fractional alpha", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.rgbaText()).to.equal("rgba(171,205,239,0.6)");
        });

        it("can succeed zero alpha", () => {
            const obj = Color.fromHex("#00ABCDEF");
            chai.expect(obj.rgbaText()).to.equal("rgba(171,205,239,0)");
        });

        it("can succeed full alpha", () => {
            const obj = Color.fromHex("#FFABCDEF");
            chai.expect(obj.rgbaText()).to.equal("rgba(171,205,239,1)");
        });
    });

    describe("hex", () => {
        it("can succeed", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.hex()).to.equal("#ABCDEF");
        });
    });

    describe("hexWithAlpha", () => {
        it("can succeed", () => {
            const obj = Color.fromHex("#98ABCDEF");
            chai.expect(obj.hexWithAlpha()).to.equal("#98ABCDEF");
        });
    });
});
