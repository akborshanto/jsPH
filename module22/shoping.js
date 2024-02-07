const products=[
{name:"shampo",price:200},
{name:"Chiruni",price:400},
{name:"shart",price:700},
]
function getShoppingCart(products){
let total=0;
for( const product of products){

//console.log(product)
total =total + product.price;

}

return total;
}
const res=getShoppingCart(products)
console.log(res)