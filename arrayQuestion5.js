/*
2574. Left and Right Sum Differences

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
*/

var leftRigthDifference = function(nums) {
    let len = nums.length

    let lsum = 0;
    let leftSum = [];
    let rsum = 0;
    let rightSum = []

    for(let i = 0; i < len; i++){
        leftSum.push(lsum)
        rightSum.unshift(rsum)

        lsum += nums[i]
        rsum += nums[len-i-1]
    }

    let answer = []
    for(let i=0; i < len; i++){
        answer[i] = Math.abs(leftSum[i]-rightSum[i])
    }

    return answer
};