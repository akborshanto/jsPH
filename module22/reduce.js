const arr=[234,23,4,4,5,6,4]
const res = arr.reduce((total,item,ind)=>{
    console.log(ind)
  return total + item;
})
console.log(res)