//根据性别过滤;
function filterArrBysex (date, sex){
    if(sex == 'a'){
        return date;
    }else {
        return date.filter(function(ele, index, self){
            return sex == ele.sex;
        })
    }

}