//function finAdress(){}

//create a object and three Property


function finAdress(obj){

const street=obj.street || "__";
const house=obj.house || "__";
const society=obj.society || "__";
const str=street + "," + house + "," + society;

return str;


}

const res=finAdress({street:15,society:"sd"})

console.log(res)