/**
 * Tests for TrytesHelper.
 */
import * as chai from "chai";
import { TrytesHelper } from "../../src/helpers/trytesHelper";

describe("TrytesHelper", () => {
    it("can be created", () => {
        const obj = new TrytesHelper();
        chai.should().exist(obj);
    });

    describe("to", () => {
        it("can fail with no content", () => {
            chai.expect(() => TrytesHelper.to(undefined)).to.throw("can not be empty");
        });

        it("can be called with content", () => {
            chai.expect(TrytesHelper.to("hello")).to.equal("WCTC9D9DCD");
        });
    });

    describe("from", () => {
        it("can fail with no content", () => {
            chai.expect(() => TrytesHelper.from(undefined)).to.throw("can not be empty");
        });

        it("can fail with odd length", () => {
            chai.expect(() => TrytesHelper.from("A")).to.throw("even number");
        });

        it("can fail with non trytes", () => {
            chai.expect(() => TrytesHelper.from("11")).to.throw("contains non-tryte");
        });

        it("can be called with content", () => {
            chai.expect(TrytesHelper.from("WCTC9D9DCD")).to.equal("hello");
        });
    });

    describe("isTrytes", () => {
        it("can fail called with undefined", () => {
            chai.expect(TrytesHelper.isTrytes(undefined)).to.equal(false);
        });

        it("can fail called with null", () => {
            chai.expect(TrytesHelper.isTrytes(null)).to.equal(false);
        });

        it("can fail called with no content", () => {
            chai.expect(TrytesHelper.isTrytes("")).to.equal(false);
        });

        it("can fail with non trytes", () => {
            chai.expect(TrytesHelper.isTrytes("11")).to.equal(false);
        });

        it("can succeed with trytes", () => {
            chai.expect(TrytesHelper.isTrytes("WCTC9D9DCD")).to.equal(true);
        });
    });
});
