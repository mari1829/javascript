let a = [1, 3, 5, 7, -8, 9, 12],
  large = [];
for (i = 0; i < a.length; i++) {
  for (j = 0; j < a.length; i++) {
    if (a[i] < a[j]) {
      large.push(a[j]);
    }
  }

  large=[];
}


function myfun() {
  a.sort(a, (b) => a - b);
  if(large==""){
    console.log("-1");
  }
  else{
    console.log(large[0]);
  }
}
myfun()
