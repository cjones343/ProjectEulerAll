/*A palindromic number reads the same both ways. The largest palindrome made 
from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.*/

function palin(num) {
    var a = num.toString();
    var len = a.length;
    if (len % 2 === 0) {
        for (var i = 0; i < (len / 2); i++) {
            if (a[i] !== a[len - 1 - i]) {
                return false;
            }
        }
        return true;
    } else {

        var j = 0;
        while (j + j < len) {
            if (a[j] !== a[len - 1 - j]) {
                return false;
            }
            j++;
        }
        return true;
    }
}

function isPalin(){
    var palins=[];
for(var i = 999; i>99;i--){
    for(var j = 999;j>99;j--){
		if(palin(j*i)){
			palins.push(j*i);

		}
	}
}
palins=palins.sort(function(a,b){return b-a;});
console.log(palins[0]);
}
isPalin();