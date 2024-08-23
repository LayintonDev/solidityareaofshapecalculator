import { ethers } from "hardhat";
import { expect } from "chai";

describe("AreaOfShapeCalculator", function () {
    let areaOfShapeCalculator: any;

    beforeEach(async function () {
       
        areaOfShapeCalculator = await  ethers.deployContract("AreaOfShapeCalculator");
    });

    it("should return the correct area of a triangle", async function () {
        const base = 10;
        const height = 5;
        const expectedArea = (base * height) / 2;
        expect(await areaOfShapeCalculator.getAreaOfTriangle(base, height)).to.equal(expectedArea);
    });

    it("should return the correct area of a square", async function () {
        const length = 4;
        const expectedArea = length * length;
        expect(await areaOfShapeCalculator.getAreaofSqaure(length)).to.equal(expectedArea);
    });

    it("should return the correct area of a rectangle", async function () {
        const length = 6;
        const width = 3;
        const expectedArea = length * width;
        expect(await areaOfShapeCalculator.getAreaofRectangle(length, width)).to.equal(expectedArea);
    });
});

