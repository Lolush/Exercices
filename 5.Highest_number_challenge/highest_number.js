/*
1. Declare an array with the following data 4, 6, 2, 7, 8, 2
2. Next, use a strategy of your choice to console.log the highest†number in the array (
for example this array's highest number is 8 ).
*/

var arrNumbers = [4, 6, 2, 7, 8, 2];
var maxValue = Math.max.apply(Math, arrNumbers);
console.log('The highest number in the row is ' +maxValue+ '.');



