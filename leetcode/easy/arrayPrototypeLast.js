"use strict";
// 2619. Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    return this.length === 0 ? -1 : this.at(-1);
};
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
