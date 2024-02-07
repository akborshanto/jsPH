const height=[65,87,67,34,23,55,67,87];


function getMax(height){
let max=height[0];
for( const num of height){
if(num > max){

    max = num;

}


}
return max;


}
const res=getMax(height);
console.log(res)
