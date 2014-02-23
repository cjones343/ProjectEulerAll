/*If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some 
numbers, like 196, never produce a palindrome. A number that never forms a palindrome 
through the reverse and add process is called a Lychrel number. Due to the 
theoretical nature of these numbers, and for the purpose of this problem, 
we shall assume that a number is Lychrel until proven otherwise. 
n addition you are given that for every number below ten-thousand, 
it will either (i) become a palindrome in less than fifty iterations, or, 
(ii) no one, with all the computing power that exists, has managed so far to map 
it to a palindrome. In fact, 10677 is the first number to be shown to require over 
fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

How many Lychrel numbers are there below ten-thousand?*/

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

function lychrel(num){
    var revNum = parseInt(num.toString().split("").reverse().join(""),10);
    var result = num + revNum;
    if(palin(result))
        return true;
    else
        return result;
        
    
}
function allLychrel(arg){
    var notLychrels=[];
    
    for(j=arg;j>10;j--){  
        var g = j;
        for(i=0;i<50;i++){
            if(lychrel(g)===true){
                notLychrels.push(j);
                break;
            }
            else
                g=(lychrel(g));
        }       
    }
    console.log(arg-10-notLychrels.length);
}
allLychrel(9999);