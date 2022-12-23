function calculate(e) {
    console.log(e.target)
    if ((e.target.innerHTML == '=')){
        buttons[1].style.backgroundColor = 'red';
        string = eval(string);
        document.getElementById("display").innerText = string;
    }
    else if (e.target.innerHTML == 'AC') {
        
        string = "";
        document.getElementById("display").innerText = string;
        location.reload();
    }else if(e.target.innerHTML == 'Del'){
        string = string.slice(0,string.length-1)
        document.getElementById('display').innerText = string

    }
    else {
        string = string + e.target.innerHTML;
        document.getElementById("display").innerText = string;
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

