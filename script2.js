function calculatebykeyboard(e){
    
    if (e.key=='='||e.key =="Enter"){
        string1 = eval(string1)
        document.getElementById('display').innerText = string1

    
    // }else if (e.key =="1" ||e.key =="2" ||e.key =="3" ||e.key =="." ||e.key =="4" ||e.key =="5" ||e.key =="6" ||e.key =="7" ||e.key =="8" ||e.key =="9" ||e.key=="0" ||e.key=="+" ||e.key=="-" ||e.key=="*" ||e.key=="/" ||e.key=="%" ){
        
    //     string1 = string1 + e.key
    //     document.getElementById('display').innerText = string1

    }else if (e.key=="Delete"){
        string1=''
        document.getElementById("display").innerText = string1
    }
    else if (arr[e.key]!=undefined){
        string1 = string1 + arr[e.key]
        document.getElementById('display').innerText = string1
    }
    else if(e.key=="+" ||e.key=="-" ||e.key=="*" ||e.key=="/" ||e.key=="%" ){
        string1 = string1 + e.key
        document.getElementById('display').innerText = string1
    }
    else if(e.key == "Backspace"){
        string1 = string1.slice(0,string1.length-1)
        document.getElementById('display').innerText = string1

    }
    else{
        string1 = 'Error'
        document.getElementById('display').innerText = string1
    }
}
var arr=['0','1','2','3','4','5','6','7','8','9']
var string1='';
document.addEventListener('keydown', calculatebykeyboard);
    
