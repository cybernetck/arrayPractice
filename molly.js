var newArr = (function combineAndCut(arr, arr2){
    var newArray = arr.concat(arr2);
    return newArray;
})(arr, arr2);

console.log(newArr);

var thirdArr = (function double (anotherArr){
    var arr2 = [];
    for (var i = 0; i < newArray.length; i++){
        arr2.push(newArray[i]*2);
    }
  return arr2;
})(anotherArr);

console.log(thirdArr);  