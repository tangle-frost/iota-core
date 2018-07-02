/**
 * Tests for NumberHelper.
 */
import * as chai from "chai";
import { NumberHelper } from "../../src/helpers/numberHelper";

describe("NumberHelper", () => {
    it("can be created", () => {
        const obj = new NumberHelper();
        chai.should().exist(obj);
    });

    describe("isInteger", () => {
        it("can return false if passed undefined", () => {
            chai.expect(NumberHelper.isInteger(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(NumberHelper.isInteger(null)).to.equal(false);
        });

        it("can return false if passed string", () => {
            chai.expect(NumberHelper.isInteger("10")).to.equal(false);
        });

        it("can return false if passed true boolean", () => {
            chai.expect(NumberHelper.isInteger(true)).to.equal(false);
        });

        it("can return false if passed false boolean", () => {
            chai.expect(NumberHelper.isInteger(false)).to.equal(false);
        });

        it("can return false if passed Date", () => {
            chai.expect(NumberHelper.isInteger(new Date())).to.equal(false);
        });

        it("can return false if passed object", () => {
            chai.expect(NumberHelper.isInteger(new NumberHelper())).to.equal(false);
        });

        it("can return false if passed floating point number", () => {
            chai.expect(NumberHelper.isInteger(1.23)).to.equal(false);
        });

        it("can return false if passed NaN", () => {
            chai.expect(NumberHelper.isInteger(Number.NaN)).to.equal(false);
        });

        it("can return false if passed Infinity", () => {
            chai.expect(NumberHelper.isInteger(Number.POSITIVE_INFINITY)).to.equal(false);
        });

        it("can return true if passed value number", () => {
            chai.expect(NumberHelper.isInteger(7)).to.equal(true);
        });
    });

    describe("isNumber", () => {
        it("can return false if passed undefined", () => {
            chai.expect(NumberHelper.isNumber(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(NumberHelper.isNumber(null)).to.equal(false);
        });

        it("can return false if passed string", () => {
            chai.expect(NumberHelper.isNumber("10")).to.equal(false);
        });

        it("can return false if passed true boolean", () => {
            chai.expect(NumberHelper.isNumber(true)).to.equal(false);
        });

        it("can return false if passed false boolean", () => {
            chai.expect(NumberHelper.isNumber(false)).to.equal(false);
        });

        it("can return false if passed Date", () => {
            chai.expect(NumberHelper.isNumber(new Date())).to.equal(false);
        });

        it("can return false if passed object", () => {
            chai.expect(NumberHelper.isNumber(new NumberHelper())).to.equal(false);
        });

        it("can return true if passed floating point number", () => {
            chai.expect(NumberHelper.isNumber(1.23)).to.equal(true);
        });

        it("can return false if passed NaN", () => {
            chai.expect(NumberHelper.isNumber(Number.NaN)).to.equal(false);
        });

        it("can return false if passed Infinity", () => {
            chai.expect(NumberHelper.isNumber(Number.POSITIVE_INFINITY)).to.equal(false);
        });

        it("can return true if passed value number", () => {
            chai.expect(NumberHelper.isNumber(7)).to.equal(true);
        });
    });
});
