function binarySearch(numbers, target) {
    if (numbers.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];

    if (target === probe) {
        return probeIdx;
    } else if (target < probe) {
        const left = numbers.slice(0, probeIdx);
        return binarySearch(left, target);
    } else {
        const right = numbers.slice(probeIdx + 1);
        const subProblem = binarySearch(right, target);

        return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
}

let nums = [1, 3, 5, 7, 8, 9, 10]
console.log(binarySearch(nums, 3)); // 1 
console.log(binarySearch(nums, 7)); // 3 
console.log(binarySearch(nums, 10)); // 6
console.log(binarySearch(nums, 11)); // -1