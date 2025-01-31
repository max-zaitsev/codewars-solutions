"use strict";
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
function TimeLimitedCache() {
    const cache = {};
    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    TimeLimitedCache.prototype.set = function (key, value, duration) {
        const currentTime = new Date().getTime();
        let oldNotExpired = false;
        if (cache[key] && cache[key].expiresAt > currentTime)
            oldNotExpired = true;
        cache[key] = { value, expiresAt: currentTime + duration };
        return oldNotExpired;
    };
    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    TimeLimitedCache.prototype.get = function (key) {
        const currentTime = new Date().getTime();
        if (cache[key] && cache[key].expiresAt > currentTime)
            return cache[key].value;
        return -1;
    };
    /**
     * @return {number} count of non-expired keys
     */
    TimeLimitedCache.prototype.count = function () {
        return Object.entries(cache).reduce((acc, [key, value]) => {
            if (value.expiresAt > new Date().getTime())
                acc += 1;
            return acc;
        }, 0);
    };
}
const timeLimitedCache = new TimeLimitedCache();
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
