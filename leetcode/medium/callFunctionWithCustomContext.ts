// 2693. Call Function with Custom Context
// https://leetcode.com/problems/call-function-with-custom-context/description/

// Enhance all functions to have the callPolyfill method. The method accepts an object obj as its first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).

// For example if you had the function:

// function tax(price, taxRate) {
//   const totalCost = price * (1 + taxRate);
//   console.log(`The cost of ${this.item} is ${totalCost}`);
// }
// Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.

// However, calling the function like tax.callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". The this context was appropriately set, and the function logged an appropriate output.

// Please solve this without using the built-in Function.call method.

/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */

// В целом, решение подходит под условие, но конечно читерское) Посмотрел потом правильное решение через прототипы и понял, что это ужас)

//@ts-ignore - тут ошибка из-за назначения нового свойства, когда его быть не должно в типе. Не понимаю, как решить (?)
Function.prototype.callPolyfill = function (context: Object, ...args: any[]) {
  return this.apply(context, [this, ...args]);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
