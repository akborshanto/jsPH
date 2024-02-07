function detail(info) {
  if (typeof info !== "object") {
    return "this thak object dao";
  } else if (typeof info.name !== "string" || typeof info.age !== "number") {
    return "name should be a string and age should be a number";
  }else if( info.age <=0){
    return "apnar boyos negetive deyenna"


  }

  return `my name  is ${info.name} and age is ${info.age} `;
}

let info = { name: "akobr"};
const res = detail(info);
console.log(res);
