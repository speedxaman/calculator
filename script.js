function calculate(e) {
    var icon = document.getElementsByClassName('fa-solid')
    // console.log(icon)
    if ((e.target.innerHTML == '=')){
        string = eval(string);
        document.getElementById("display").value = string;
    }
    else if (e.target.innerHTML == 'AC') {
        string = "";
        document.getElementById("display").value = string;
    } else if(e.target.innerHTML == icon[0]){
        // console.log(e.target)
        string = string + '/';
        document.getElementById("display").value = string;
    }
    else {
        // console.log(e.target)
        string = string + e.target.innerHTML;
        document.getElementById("display").value = string;
    }
}

let buttons = document.getElementsByClassName('function');
let string = '';
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calculate);
    
}
// For Changing Color of Background of a Number when Clicked
let numbers = document.getElementsByClassName('number')
for (let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('mousedown',function(){
        numbers[i].style.backgroundColor ='lightgrey';
    })
    numbers[i].addEventListener('mouseup',function(){
        numbers[i].style.backgroundColor ='initial';
    })
}

