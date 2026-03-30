p1 = int(input("Enter the original price of the commodity: "))
q1 = int(input("Enter the original quantity demand of commodity: "))

p2 = int(input("Enter the new price of the commodity: "))
q2 = int(input("Enter the new quantity demand of commodity: "))

cp = ((p2-p1)/p1)*100
cq = ((q2-q1)/q1)*100

print("Percentage change in quantity demand: ", cq, "%")
print("Percentage change in price: ", cp, "%")

d = cq/cp
d = abs(d)

print("Elasticity of demand: ", d)

if d < 1:
    print("Inelastic demand!")
elif d == 1:
    print("Perfectly elastic demand (Unitary elastic demand)!")
elif d > 1:
    print("Elastic demand!")