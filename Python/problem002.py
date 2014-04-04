fib=[1,1]
term = 1
i = 1
sum=0
while term<4000000:
    if term%2==0:
        sum += term
    term = fib[i]+fib[i-1]
    fib.append(term)
    i +=1
print sum