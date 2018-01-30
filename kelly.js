var maximum = function(){
    thirdArr.sort(function(a, b){return b-a});
    var max = thirdArr[0];
    return max;
    console.log(max);
}

maximum(thirdArr);

var minimum = function(){
    thirdArr.sort(function(a, b){return a-b});
    var min = thirdArr[0];
    return min;
    console.log(min);
}

minimum(thirdArr);
