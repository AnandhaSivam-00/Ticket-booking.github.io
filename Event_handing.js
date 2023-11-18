let adults = 0;
let children = 0;
let price = 0;
if(adults < 0){
    adults = 0;
}
if(children < 0){
    children = 0;
}

function consoleWindow(){
    for(let i=1;i<=adults;i++){
        console.log("Ticket #" + i);
    }
    for(let i=1;i<=children;i++){
        console.log("Ticket #" + i);
    }
    console.log(price);
}

function calc(adults,children){
    return adults*12 + children*6;
}

window.onload = function(){
    let btn = document.getElementById("buybtn");
    btn.onclick = function(){
        adults = document.getElementById("Adults").value;
        children = document.getElementById("Children").value;
        price  = calc(adults,children);
        consoleWindow();
        alert(price);
    }
}