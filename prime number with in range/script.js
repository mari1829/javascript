let a=parseInt(prompt("Give The Lowest Value"))
let b=parseInt(prompt("Give The Highest Value"))
for(i=a; i<=b; i++){
    c=0;
    for(j=2; j<i; j++){
        if(i%j==0){
            c=1;
            break;
        }
    }
    if(c==0 && 1<i){
        console.log(i);
    }
}