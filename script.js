let display = document.getElementById("display");
let AC = document.getElementById("dAC");
let c = document.getElementById("dc");

AC.addEventListener("click",()=>{
    display.value="";
});
c.addEventListener("click",()=>{
    display.innerHTML="a";
});

function ins(value){
    display.value += value;
}
function calculate() {
     try {
         let expression = display.value;
          // Convert percentage 
          expression = expression.replace( /(\d+(\.\d+)?)%/g, "($1/100)" );
         display.value = eval(expression);
         } catch (error)
          { display.value = "Error";
            
           } }
         