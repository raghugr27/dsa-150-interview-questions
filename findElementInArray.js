let arr=[4,6,8,9,10]
const searchElement = (arr, ele) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return i
    }
    return -1;
};
console.log(searchElement(arr,8))