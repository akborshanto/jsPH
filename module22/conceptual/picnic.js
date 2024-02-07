function picnicBudget(participate){


if(typeof participate !== "number"|| participate <0){
    return "you should have at least a number "
}else{
    let firstCost100=0;//5000

let secondCost200=0;//4000
let remainingCost=0;
let totalCost=0;

/* ARTICIIPATE-COST */
if( participate <=100){

    firstCost100= participate * 5000;
    return firstCost100;

}else if( participate <= 200){

firstCost100 =5000 * 100;
secondCost200= (participate - 100)* 4000;
totalCost =firstCost100 + secondCost200;
return totalCost;

}else{

firstCost100= 5000 * 100;
secondCost200 =4000*100;
remainingCost=(participate -200) * 3000;
totalCost=firstCost100 + secondCost200 + remainingCost;
return totalCost;



}






}
    






}


const res=picnicBudget(202)
console.log(res)