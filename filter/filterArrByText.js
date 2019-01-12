//根据文本过滤数组;
function filterArrByText (date, text){
    if(!text){
        return date;
    }else{
        //filter 的返回值是true/false决定当前元素是否会被放到新数组中;
        return date.filter(function(ele, index){
            // 如果输入的thi.value在当前元素中的话 不会返回返回-1,这里自然是true;
            return ele.name.indexOf(text) != -1;
        });
    }
}