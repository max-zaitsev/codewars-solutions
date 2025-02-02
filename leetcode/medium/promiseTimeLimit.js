"use strict";
// 2637. Promise Time Limit
// https://leetcode.com/problems/promise-time-limit/description/
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args)
                .then((res) => resolve(res))
                .catch((e) => reject(e));
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
    };
};
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
