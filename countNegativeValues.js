

const countNegatives = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) count += 1;
    }
    return count;
}
console.log(countNegatives([4,1,5,7,8,-1,-4,8,-3,31,-21]))