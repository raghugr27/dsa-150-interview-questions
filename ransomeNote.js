var canConstruct = function(ransomNote, magazine) {
    const count = new Array(26).fill(0);
    console.log("count", count);
    for (let char of magazine) {
        console.log(char.charCodeAt(0))
        count[char.charCodeAt(0) - 97]++;
        console.log("count", count);
    }

    for (let char of ransomNote) {
        const idx = char.charCodeAt(0) - 97;
        count[idx]--;
        if (count[idx] < 0) return false;
    }

    return true;
};
console.log(canConstruct("aab","baaacf"))