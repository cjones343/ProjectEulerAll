/*ibonacci sequence is generated by adding
 the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose
 values do not exceed four million, find the sum of the even-valued terms.*/
function fibF(to){
var fib = [1,1];
var fibEvenTotal=0;
var i=1;
var nFib;
while(fib[i]<to){
    
    nFib=(fib[i]+fib[i-1]);
    if(nFib<to){fib.push(nFib);}
    else{break;}
    i++;

}


for(j=0;j<fib.length;j++){
	if(fib[j]%2===0){
		fibEvenTotal+=fib[j];
	}
	
}
console.log(fibEvenTotal);
}
fibF(4000000);