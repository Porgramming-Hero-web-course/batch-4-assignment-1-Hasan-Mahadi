"use strict";
{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (arr) => {
        return arr.reduce((sum, num) => sum + num, 0);
    };
    console.log(sumArray([1, 2, 3, 4, 5]));
}
