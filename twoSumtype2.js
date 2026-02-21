
// when array is sorted two pointer approach
const twoSumType2 = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum > target) j--;
        else if (sum < target) i++;
        else return [i + 1, j + 1]

    }
};
console.log(twoSumType2([2,7,11,15],26))