function combineFilter (config) {
    return function(date) {
        for (var porp in config){
            // console.log(porp, config[porp], state[porp]);
            date = config[porp](date, state[porp]);//用config[porp]找到当前的过滤函数，过滤完后将过滤后的数组赋值给date，
            //data成为下次需要过滤的对象；
        }
        return date;
    }
}

var lastFilterArr = combineFilter({
    text : filterArrByText,
    sex : filterArrBysex
});