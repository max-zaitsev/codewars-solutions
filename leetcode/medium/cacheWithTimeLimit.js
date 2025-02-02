"use strict";
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.
class TimeLimitedCache {
    cache = {};
    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const currentTime = new Date().getTime();
        let oldNotExpired = false;
        if (this.cache[key] && this.cache[key].expiresAt > currentTime)
            oldNotExpired = true;
        this.cache[key] = { value, expiresAt: currentTime + duration };
        return oldNotExpired;
    }
    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        const currentTime = new Date().getTime();
        if (this.cache[key] && this.cache[key].expiresAt > currentTime)
            return this.cache[key].value;
        return -1;
    }
    /**
     * @return {number} count of non-expired keys
     */
    count() {
        return Object.entries(this.cache).reduce((acc, [key, value]) => {
            if (value.expiresAt > new Date().getTime())
                acc += 1;
            return acc;
        }, 0);
    }
}
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
