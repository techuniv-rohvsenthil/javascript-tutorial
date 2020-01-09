
var counter = function () {
    var count = 0;
    return function () {
        ++count;
        return count;
        }
    }

function counterCreator(num_of_counters){
    var counterArray = [];
    for(var i = 0; i < num_of_counters; i++){
        counterArray[i] = counter();
    }
    return counterArray;
}

var counters = counterCreator(2);
console.log(counters[0]());
console.log(counters[0]());
console.log(counters[1]());