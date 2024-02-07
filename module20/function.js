const num=[1,2,3,43,56,6];
function sumOfNumber(num){
const even=[]
for ( const number of num){
if(number %2 ===0){

    even.push(number)
}    


}
return even;


}
console.log(sumOfNumber(num))
