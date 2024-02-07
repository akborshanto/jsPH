const computer={

name:"HP",
price:20000,
unique:{
    color:"blue"
}
};

for(const prop in computer){


//console.log(computer[prop])
}
const keys=Object.keys(computer)
console.log(keys)
for(const key of keys){
    console.log(key[1])
}