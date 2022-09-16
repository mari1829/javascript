function colorchanging(){
    
    let a=document.getElementById("head-1");
    let d=document.getElementById("in-text").value;
   
    a.style.color=d;
    
}
let c=document.getElementById("btn1");
c.addEventListener("click",colorchanging);




