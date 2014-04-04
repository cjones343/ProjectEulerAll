def is_palin(n):
    num = str(n)
    sLen = len(num)
    mid=sLen/2
    if sLen%2!=0:
        i=0
        while i<mid-1:
            if num[i]!=num[sLen-1-i]:
                return False
            i +=1
        return True
    else:
        i = 0
        while i != mid:
            if num[i]!=num[sLen-1-i]:
                return False
            i+=1
        return True
#This next part needs some optimization, but it prints the right answer
palins=[]
num1 =999
while num1>900:
    num2=999
    while num2>900:
        comp = num1*num2
        if is_palin(comp):
            palins.append(comp)
            num2-=1
            break
        num2-=1
    num1-=1
palins.sort( reverse=True)
print palins[0]
#prints 906609