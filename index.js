//Solution 2 (faster)
function hasTargetSum(array,target){
  const seenNumbers = {}

  for(const number of array) {
    const complement = target - number
    if(complement in seenNumbers) return true
    seenNumbers[number] = true
  }

  return false
}

// Solution 1 (slow)
//function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true
//     }
//   }
//   return false
// }

/* 
  Write the Big O time complexity of your function here 

  // Solution 1
  Runtime: O(n^2)
  Space: O(n)

  //Solution 2
  Runtime: O(n)
  Space: 
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
