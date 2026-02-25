
const largestOddNumber = (num) => {
    let i = num.length-1;
    while (i >= 0) {
        if ((num[i] - 0) % 2 !== 0) return num.slice(0, i + 1);
        i--;
    }
    return ""
}
console.log(largestOddNumber("24"))