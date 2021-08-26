import math
height, current, hope = [int(num) for num in input().split(" ")]
print(math.ceil((hope - height + current) / (height - 1)))
