var canJump = function(nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false; // stuck
        farthest = Math.max(farthest, i + nums[i]);
    }
    return true;
};