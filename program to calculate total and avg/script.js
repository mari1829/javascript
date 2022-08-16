let a=[]
b=0
let n=parseInt(prompt("Give The Terms"))
for(i=0; i<n; i++){
    a[i]=parseInt(prompt("give the value"))
    sum=a[i]+b
    b=sum
}
console.log(a);
console.log(b);


let avg=(sum/n)
console.log(avg,"percentage");
