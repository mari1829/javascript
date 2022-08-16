let a = parseInt(prompt("Give The a value:"))
let b = parseInt(prompt("Give The b Value:"))
let c = parseInt(prompt("Give The c Value:"))



if(a>b && a>c){
    if(b>c){
        console.log(c,b,a);
        console.log(a,b,c);
    }
    else{
        (b<c)
        console.log(b,c,a);
        console.log(a,c,b);
}

}

if(b>a && b>c){
    if(a>c){
        console.log(c,a,b);
        console.log(b,a,c);
    }
    else{
        (a<c)
        console.log(a,c,b);
        console.log(b,c,a);
    }
}


if(c>a && c>b){
    if(a>b){
        console.log(b,a,c);
        console.log(c,a,b);
    }
    else{
        (a<b)
        console.log(a,b,c);
        console.log(c,b,a);
    }
}



















