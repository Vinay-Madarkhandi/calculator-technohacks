let input = document.getElementById('calInput');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (val) =>{
        if(val.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(val.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(val.target.innerHTML == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += val.target.innerHTML;
            input.value = string;
        }
        
    })
})