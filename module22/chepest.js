const phones=[
{name:"Xiomi",price:2000, color:"black"},
{name:"VIVO",price:3000, color:"black"},
{name:"IPHONE",price:1000, color:"black"}

]

function getChepestPhone(phones){
let min=phones[0]

for( const phone of phones){
if( phone.price <min.price){
       min =phone;
}
}
return min;

}

const res=getChepestPhone(phones)
console.log(res)