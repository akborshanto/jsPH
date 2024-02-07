const biriyani=["a","b","c","d","e","f","a","a","b","c","d","e"]
const numbers=[1,3,45,6,7,7,7,5,4,3,2,1 ,9,76,];
function noDuplicate(array){
  //.  console.log(array)
const unique=[];

for(const item of array){

//console.log(item)

if(unique.includes(item) === false){


    unique.push(item)
}

}

return unique;
}

const uniqueArray=noDuplicate(biriyani)
console.log(uniqueArray)
