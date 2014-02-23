/*If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

//This to store the multiples//
var multiples=[];
total=0;
for(i=999;i>0;i--){
	if(i%3===0 || i%5===0){
		multiples.push[i];
	}
}
for(j=0;j<multiples.length;j++){
	total+=multiples[j];
}
console.log(total);

//This to just output//


var total=0;
for(i=999;i>0;i--){
    if(i%3===0 || i%5===0){
		total+=i;
	}
}

console.log(total);