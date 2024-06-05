let valueDisplays=document.querySelectorAll(".num");
let interval=4000;

// console.log(valueDisplay);
valueDisplays.forEach((valueDisplay) =>{
    let startvalue=0;
    let endvalue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endvalue);
    let counter= setInterval( function () {
        startvalue += 1;
        valueDisplay.textContent= startvalue;
        if(startvalue===endvalue){
            clearInterval(counter);
        }
    }, duration) ;
});