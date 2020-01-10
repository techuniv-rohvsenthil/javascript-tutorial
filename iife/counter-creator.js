var counter_array = (function countCreator(num_of_counters = 5){
    let counter_arr =[]
    for(var i = 0; i < num_of_counters; i++ ){
        counter_arr.push(function counter(){
            let count = 0;
            return ++ count;
        })
    }
    return counter_arr;
})()
console.log(counter_array);