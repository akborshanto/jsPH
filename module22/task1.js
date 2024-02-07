const lowest=[12,34,454,5656,2,23,1,0,4]


function getMin( lowest){
let minimum=lowest[0];
    for( const min of lowest){
if( min < minimum ){

minimum = min;


}


    }

    return minimum;


}
const res=getMin(lowest)
console.log(res)