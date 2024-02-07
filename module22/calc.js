function add(num1,num2){
    return num1 + num2
}
function substract(num1,num2){
    return num1 - num2
}
function multiply(num1,num2){
    return num1 * num2
}
function devide(num1,num2){
    return num1 / num2
}

function calcutator(a,b,operation){

if( operation === "add"){

return add(a,b)

}else if( operation === "substract"){
    return substract(a,b)
}else if(operation === "multiply"){
    return multiply (a,b)
}else if( operation === "divide"){
    return devide(a,b) 
}




}
const res=calcutator(3,4,"divide")
console.log(res)