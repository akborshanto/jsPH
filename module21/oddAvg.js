function oddAverage(numbers) {
  let ods = [];
  for (let number of numbers) {
    if (number % 2 === 1) {
      //console.log(number)

      ods.push(number);
    }
  }

  /* ods number container................. */
  //console.log(ods);


let sum=0;
for (const number of ods){


    sum = sum + number;
}
const count=ods.length;
const avg=sum /count;
console.log(count)

return avg;

}
const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
//console.log("average of the odd numbers is:", avg);
