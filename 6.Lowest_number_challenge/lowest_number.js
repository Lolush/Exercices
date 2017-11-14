/*
1. Declare an array with the following data 5, 6, 2, 4, 9, 3
2. Next, use a strategy of your choice to console.log the lowest†number in the array (
for example this array's lowest number is 2 ).
*/

var arrNumbers = [5, 6, 2, 4, 9, 3];
var minValue = Math.min.apply(Math, arrNumbers);
console.log('The lowest number in the row is '+ minValue +'.');
