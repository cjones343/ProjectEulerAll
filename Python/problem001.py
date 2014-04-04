def FiveOrThree(num):
    num = num - 1
    total = 0
    while num>0:
		if num%3==0 or num%5==0:
			total +=num
		num -=1
    return total
print FiveOrThree(1000)

#prints 233168