let date=new Date("09/14/2022"),
day=date.getDay();
// console.log(day);
if(day=="0"||day=="6"){
	console.log("Given Date is weekend");
}
else{
	console.log("Given Date is not a weekend");
}

