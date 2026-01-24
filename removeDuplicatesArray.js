/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let position =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[position]) {
            position+=1;
            nums[position] = nums[i]
        }
    }
    return position+1
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4])