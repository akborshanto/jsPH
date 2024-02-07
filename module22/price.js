const price=[20000,23400,32000,9999,23453,8];
function getMin(numbers){
let min= numbers[0]
for( const num of price){
if( num <min){
    min =num;
}


}
return min;

}

const res=getMin(price)
console.log(res)