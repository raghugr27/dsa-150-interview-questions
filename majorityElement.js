
const majorityElement = (nums) => {
    let count = 0;
    let candidate = null;

    for (let i = 0; i < nums.length; i++){
        if (count === 0) candidate = nums[i];
        count+= nums[i]===candidate ? +1 :-1
    }
    return candidate
}
console.log(majorityElement([2,3,4,3,1]))