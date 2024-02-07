const products=[
    {name:"shampo",price:2000, quantitey:5   },
    {name:"Chiruni",price:400, quantitey:3  },
    {name:"shart",price:70000, quantitey:2   },
    ];


    function getShopingTotal(products){
let total=0;
for( const product of products){
let totalShoping= product.price * product.quantitey;
total += totalShoping;


}

return total

    }

    const res=getShopingTotal(products);
    
    console.log(res)

