// My first calculator app

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function darkMode(){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }else{
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
       } 
}