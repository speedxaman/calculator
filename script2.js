document.addEventListener('keydown',function(event){
    var arr = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/'];
    if ((event.key=='enter') ||(event.key =='=')){
        string1 = eval(string1)
        document.getElementById("display").value = string1;
    }else if ((event.key == 'backspace')||(event.key == 'delete')) {
        string1= "";
        document.getElementById("display").value = string1;
    } else if(arr[event.key-1]) {
        string1 = string1 + event.key;
        document.getElementById("display").value = string1;
    }
})
let string1=''