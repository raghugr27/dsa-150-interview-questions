const lst = [1, 2, 4, 7,8, 9, 10];
  function callbackFn (value) {
    return value > this.max_val
}
// const filteredList = lst.filter(callbackFn,{max_val:3});
// console.log(filteredList)
Array.prototype.myFilter = function (callbackFn, thisArg) {
    if (typeof callbackFn !== "function") {
        throw new TypeError(`${callbackFn} is not a function`)
    };
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn.apply(thisArg,[this[i], i, this])) result.push(this[i]);
    }
    return result
};
const filteredList = lst.myFilter(callbackFn, { max_val: 3 });
 console.log(filteredList)