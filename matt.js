/*
matt.js

getEvens - takes in an array, and filters out the even values, and creates a new array.
The array of even values is returned back.

usage - getEvens('name of array')
example - getEvens(newArr);

*/

//var temp = [2,3,4,5,6,7,8,9,10,11];

var getEvens = function (newArr) {
    var evenArr = [];

    for (x=0;x< newArr.length; ++x)
        {
          if (newArr[x] % 2 === 0)

            { 
                evenArr.push(newArr[x]);

             }

        }   

    return evenArr;
}



