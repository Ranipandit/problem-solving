/*
2600. K Items With the Maximum Sum (From leetcode)

Example 1:
Input: numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
Output: 2
Explanation: We have a bag of items with numbers written on them {1, 1, 1, 0, 0}. We take 2 items with 1 written on them and get a sum in a total of 2.
It can be proven that 2 is the maximum possible sum.
*/


var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if( k <= numOnes){
        return k
    }else if( k <= (numOnes + numZeros)){
        return numOnes
    }else{
        let n = k - (numOnes + numZeros)
        return numOnes - n
    }

    //other easy solution then mine
    // return Math.min(k, numOnes) - Math.max(0, k - numOnes - numZeros)
};