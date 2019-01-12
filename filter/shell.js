var personArr = [
    {name: '王港', src: './img的副本/1.png', des: '颈椎不好', sex: 'm', age: 18}, 
    {name: '刘莹', src: './img的副本/2.png',des: '我是谁', sex: 'f', age: 23}, 
    {name: '王秀莹', src: './img的副本/3.png', des: '我很好看', sex: 'f', age: 25}, 
    {name: '刘金雷', src: './img的副本/4.png', des: '你没有见过陌生的脸', sex: 'm', age: 15}, 
    {name: '刘飞翔', src: './img的副本/5.png', des: '瓜皮刘', sex: 'm', age: 20}
];
//dom感受事件发生 => 更改状态 = > 影响视图　　　　　
var ul = document.getElementsByTagName('ul')[0];
var oinput = document.getElementsByTagName('input')[0];
var state = {
    text : '',
    sex : 'a'
}

// var filtertext = '';//全局的记录输入的文本是什么
// var filtersex = 'a';//全局的记录性别
//数据渲染 
function renderPage(date){
    var htmlarr = ' ';
    ul.innerHTML = ' ';
    // 遍历
    date.forEach(function(ele, index, self){
        // 字符串拼接
        htmlarr = htmlarr + '<li><img src="' + ele.src + '"></img><p class="p-top">' + ele.name + '</p><p class="p-bottom">' + ele.des + '</p></li>'
    })
    // 插入页面
    ul.innerHTML = htmlarr;
}
renderPage(personArr);

//添加行为
oinput.oninput = function(){
    // console.log(filtertext);
    state.text = this.value;
    // var newArr = filterArrByText( personArr, state.text );
    // var newArr2 = filterArrBysex( newArr, state.sex );
    renderPage( lastFilterArr(personArr) );
}

//btn
var obtn = [].slice.call( document.getElementsByClassName('btn') ,0);
var lastName = obtn[2];
obtn.forEach(function(ele, index, self) {
    ele.onclick = function(){
        console.log(state.sex, state.text);
       changebtn(this,self);
       state.sex = this.getAttribute('sex');
    //    var newArr = filterArrBysex(personArr, state.sex)
    //    var newArr2 = filterArrByText(newArr, state.text);
    // console.log(lastFilterArr(personArr));
       renderPage( lastFilterArr(personArr) );
    //    console.log(lastFilterArr(personArr));
       // this.getAttribute('sex') 
    }
})
//修改btn className
function changebtn(curbtn, obj){
    curbtn.className = 'btn btn-x';
    lastName.className = 'btn';//先取消 btn[2].className;
    lastName = curbtn; 
}

