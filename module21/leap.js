
function isLeapYear(year){
if(year %400 ===0) return true;
if(year % 100 !==0) return true;
return year % 4 === 0;




}

console.log(isLeapYear(2000))
console.log(isLeapYear(2004))
console.log(isLeapYear(2004))