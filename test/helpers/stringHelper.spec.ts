/**
 * Tests for StringHelper.
 */
import * as chai from "chai";
import { StringHelper } from "../../src/helpers/stringHelper";

describe("StringHelper", () => {
    it("can be created", () => {
        const obj = new StringHelper();
        chai.should().exist(obj);
    });

    describe("encodeNonASCII", () => {
        it("can return undefined if passed undefined", () => {
            chai.expect(StringHelper.encodeNonASCII(undefined)).to.equal(undefined);
        });

        it("can return undefined if passed null", () => {
            chai.expect(StringHelper.encodeNonASCII(null)).to.equal(undefined);
        });

        it("can return encoded string if non ascii", () => {
            chai.expect(StringHelper.encodeNonASCII("🎺⚽")).to.equal("\\ud83c\\udfba\\u26bd");
        });

        it("can return same string if all ascii", () => {
            chai.expect(StringHelper.encodeNonASCII("$ABCD")).to.equal("$ABCD");
        });
    });

    describe("decodeNonASCII", () => {
        it("can return undefined if passed undefined", () => {
            chai.expect(StringHelper.decodeNonASCII(undefined)).to.equal(undefined);
        });

        it("can return undefined if passed null", () => {
            chai.expect(StringHelper.decodeNonASCII(null)).to.equal(undefined);
        });

        it("can return encoded string if non ascii", () => {
            chai.expect(StringHelper.decodeNonASCII("\\ud83c\\udfba\\u26bd")).to.equal("🎺⚽");
        });

        it("can return same string if all ascii", () => {
            chai.expect(StringHelper.decodeNonASCII("$ABCD")).to.equal("$ABCD");
        });
    });

    describe("isASCII", () => {
        it("can return false if passed undefined", () => {
            chai.expect(StringHelper.isASCII(undefined)).to.equal(false);
        });

        it("can false if passed null", () => {
            chai.expect(StringHelper.isASCII(null)).to.equal(false);
        });

        it("can return false if contains non ascii", () => {
            chai.expect(StringHelper.isASCII(String.fromCharCode(256))).to.equal(false);
        });

        it("can return false if contains non ascii unicode", () => {
            chai.expect(StringHelper.isASCII("⚽")).to.equal(false);
        });

        it("can return trur if all ascii", () => {
            chai.expect(StringHelper.isASCII("$ABCD")).to.equal(true);
        });
    });
});
