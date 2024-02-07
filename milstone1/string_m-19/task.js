// const cat = {
//   name: "Fluffy",
//   age: 2,
//   color: "white",
//   isCute: true,
// };
//const res=Object.keys(cat).length
//console.log(res)
// for(const key in  cat){
//     console.log( `key:${key.name} |type:${typeof cat.name} 
//   |type: type:${typeof cat.age}
//  |type:  type:${typeof cat.color}
//    |type:  type:${typeof cat.isCute}
    
//     `)
// }
// const cat = {
//   name: "Fluffy",
//   age: 2,
//   color: "white",
//   isCute: true,
// };
// for(let item in cat){

// const res=`
// ${item} |type: ${ typeof cat[item]}
// `
//   console.log(res)
// }


const student= {name:"John", age:22, address:"New York"};

// Object.keys(student).forEach(function(key) {
// console.log(key+": "+student[key]);
// });
var res=Object.keys(student).forEach(
(item)=>{
  console.log(item,student[item])
}


 )
console.log(res)