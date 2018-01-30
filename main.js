/*

G-pigs main.js

*/

var arr = [1,2,3,4,5,6];
var arr2 = [7,88,9,10,11,12];

var newArr = combineAndCut(arr,arr2);

var anotherArr = getEvens(newArr);

var thirdArr = double(anotherArr);

var maximum = max(thirdArr);

var minimum = min(thirdArr);

console.log(maximum);
console.log(minimum);