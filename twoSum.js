
// [2,7,11,15]

const twoSum = (arr, target) => {
    let pairsMap = new Map();
    for (let i = 0; i < arr.length; i++){
        let findPair = target - arr[i];
        if (pairsMap.has(findPair)) return [pairsMap.get(findPair), i];
        pairsMap.set(arr[i],i)
    }
}
 console.log(twoSum([2,7,11,15],9))