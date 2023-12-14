

let div = document.createElement("div")
div.innerHTML=10
let counter = setInterval(countdown,100)
function countdown() {
    div.innerHTML-=1;    
if (div.innerHTML==="0") {
    clearTimeout(counter)
    div.innerHTML=10;
    counter = setInterval(countdown,100)
}
}
div.style.cssText=`
color:red;
font-size:100px;
text-align:center;
position:absolute;
top:30%;
left:30%;
transform:translate(-50%,-50%);`
document.body.appendChild(div)

let count2 = setInterval(countdown2,10000)
function countdown2() {
    let div2 = document.createElement("div")
div2.innerHTML="ءمل ءيه مش لاقي حاجة ءملها ب جي اس"
let = counter2 = setInterval(countdown,1000)

div2.style.cssText=`
color:red;
font-size:100px;
text-align:center;
position:absolute;
top:100%;
left:50%;
transform:translate(-50%,-50%);
`
let y= document.querySelector(".divoverbody")
console.log(y);
y.appendChild(div2)
}
console.log(x);