/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let position = nums.reduce((position,number)=> {
        if(number!==val){
            nums[position]=number;
            position+=1;
        }
        return position
    },0)
    return position
};