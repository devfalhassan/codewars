'use strict';

/*

Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]

https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript
 */

function solution(number) {
  const multipleOfThree = [];
  const multipleOfFive = [];
  const multipleOfThreeAndFive = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 !== 0) multipleOfThree.push(i);
    if (i % 5 === 0 && i % 3 !== 0) multipleOfFive.push(i);
    if (i % 3 === 0 && i % 5 === 0) multipleOfThreeAndFive.push(i);
  }

  return [
    multipleOfThree.length,
    multipleOfFive.length,
    multipleOfThreeAndFive.length,
  ];
}

console.log(solution(20));
