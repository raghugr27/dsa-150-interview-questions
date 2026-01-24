/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    let writeIndex = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            count = 1;
        } else {
            count++;
        }
        if (count <= 2) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex;
};
removeDuplicates2([1,1,1,2,2,3])