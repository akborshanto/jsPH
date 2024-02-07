//make a function name as a canpay()

function canPay(changeArr,totalDue){

/* empty arrr */

if( changeArr.length ===0){
console.log("INVALID ARRAY........")
}
/* KHUCRA NOTE */
let num=0;
for( let first of changeArr){
num = num+ first;



}


if( num >=totalDue){
    return true;
}else if( num <=totalDue){
    return false;
}





return num;

}

const res=canPay([],10)
console.log(res)