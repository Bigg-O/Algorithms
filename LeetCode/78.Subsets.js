// Second Attempt
// Cascading Method
// Runtime Complecity:
// O(n*(n^2))
// Space Complexity:
// O(n*(n^2))
function subsets(nums) {
    if (nums.length === 0) {
        return []
    }

    const result = [[], [nums[0]]]
    makeSubsets(nums, result)
    return result
}

function makeSubsets(nums, result, numsIndex = 0, resultIndex = 1) {
    if (numsIndex === nums.length) {
        return;
    }
    
    if (result[resultIndex].length === 1 && result[resultIndex][0] === nums[numsIndex]) {
        numsIndex++
        resultIndex = 1
        if (numsIndex < nums.length) {
            result.push([nums[numsIndex]])
        }
    } else {
        result.push([nums[numsIndex]])
        result[result.length - 1].push(...result[resultIndex])
        resultIndex++
    }

    makeSubsets(nums, result, numsIndex, resultIndex)
}

// // First Attempt (Failed)
// // Brute Force
// function subsets(nums) {
//     const result = [[]]
//     nums.forEach(num => {result.push([num])})

//     for (let count = 1; count <= nums.length; count++) {
//         for (let start = 0; start <= nums.length - count; start++) {
//             if (count < 2) {
//                 for (let i = start + count; i < nums.length; i++) {
//                     result.push([...nums.slice(start, start + count), nums[i]])
//                 }
//             } else {
//                 for (let i = 0; i < nums.length; i++) {
//                     if (i >= start + count || i < start - 1) {
//                         result.push([...nums.slice(start, start + count), nums[i]])
//                     }
//                 }
//             }
//         }
//     }

//     return result
// }

const INPUT = [1,2,3,4]
console.log("INPUT:", INPUT)
const OUTPUT = subsets(INPUT)
console.log("OUTPUT LENGTH:", OUTPUT.length)
console.log("OUTPUT:", OUTPUT)

// const CORRECT_OUTPUT = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3],[4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[2,3,4],[1,2,3,4],[5],[1,5],[2,5],[1,2,5],[3,5],[1,3,5],[2,3,5],[1,2,3,5],[4,5],[1,4,5],[2,4,5],[1,2,4,5],[3,4,5],[1,3,4,5],[2,3,4,5],[1,2,3,4,5],[6],[1,6],[2,6],[1,2,6],[3,6],[1,3,6],[2,3,6],[1,2,3,6],[4,6],[1,4,6],[2,4,6],[1,2,4,6],[3,4,6],[1,3,4,6],[2,3,4,6],[1,2,3,4,6],[5,6],[1,5,6],[2,5,6],[1,2,5,6],[3,5,6],[1,3,5,6],[2,3,5,6],[1,2,3,5,6],[4,5,6],[1,4,5,6],[2,4,5,6],[1,2,4,5,6],[3,4,5,6],[1,3,4,5,6],[2,3,4,5,6],[1,2,3,4,5,6]].sort((a,b) => a.length-b.length)
// console.log("CORRECT OUTPUT LENGTH:", CORRECT_OUTPUT.length)
// console.log("CORRECT OUTPUT:", CORRECT_OUTPUT)