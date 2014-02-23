/*By listing the first six prime numbers: 2, 3, 5, 
7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/

/* My sieve of eratosthenes*/
function sieve(lim,cLim){
    var squareLimit=Math.sqrt(lim);
	var sArr=[];
	for(var i=2;i<lim;i++)
		sArr[i]=true;
	
	for(i=2;i<squareLimit;i++){
		
		if(sArr[i]){
			for (var j=i + i;j<lim;j+=i){
				sArr[j]=false;
			}
		}
	}

	var k;
	var count = 0;
	for(k=2;count<cLim;k++){

        if(sArr[k])
            count++;	
	}
	return k-1;
}
console.log(sieve(1000000,10001));
