// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AreaOfShapeCalculator {
    // Area of triangle = (base * height) / 2
    function getAreaOfTriangle(
        int _base,
        int _height
    ) public pure returns (int) {
        return (_base * _height) / 2;
    }
    // Area of square = length * length
    function getAreaofSqaure(int _length) public pure returns (int) {
        return _length * _length;
    }
    // Area of rectangle = length * width
    function getAreaofRectangle(
        int _length,
        int _width
    ) public pure returns (int) {
        return _length * _width;
    }
}
