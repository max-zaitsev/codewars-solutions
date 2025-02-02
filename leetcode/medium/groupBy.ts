// 2631. Group By
// https://leetcode.com/problems/group-by/description/

// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

/**
 * @param {Function} fn
 * @return {Object}
 */
//@ts-ignore - тут ошибка из-за назначения нового свойства, когда его быть не должно в типе. Не понимаю, как решить (?)
(Array as Array<T>).prototype.groupBy = function <T>(fn: (item: T) => string) {
  return this.reduce<Record<string, Array<T>>>((acc: Record<string, Array<T>>, current: T) => {
    const res = fn(current);
    if (acc[res]?.length) acc[res].push(current);
    else acc[res] = [current];
    return acc;
  }, {});
};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
