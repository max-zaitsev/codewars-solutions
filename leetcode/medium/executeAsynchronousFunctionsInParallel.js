"use strict";
// 2721. Execute Asynchronous Functions in Parallel
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/
// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
// promise resolves:
// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:
// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function (functions) {
    return new Promise((finalResolve, finalReject) => {
        const results = [];
        let resolvedPromises = 0;
        functions.forEach((func, index) => {
            func()
                .then((res) => {
                results[index] = res;
                resolvedPromises++;
                if (resolvedPromises === functions.length)
                    finalResolve(results);
            })
                .catch((err) => finalReject(err));
        });
    });
};
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
