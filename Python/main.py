import os

def calc(a, b, op):
    c = 0

    if op == "/" and b == 0:
        print("\nTidak Boleh Dibagi Nol!")
    elif op == "+":
        c = a + b
    elif op == "-":
    	c = a - b
    elif op == "*":
    	c = a * b
    elif op == "/":
    	c = a / b
    else:
    	print("\nOperator Tidak Valid!")

    return c

ulg = 'y'
while(ulg == 'y' or ulg == 'Y'):
    print("=====KALKULATOR SEDERHANA=====")
    print("Masukan Angka Pertama\t:")
    a = input()
    print("Masukan Operator\t:")
    op = input()
    print("Masukan Angka Kedua\t:")
    b = input()

    c = calc(float(a), float(b), op)

    print("\nHasil\t\t\t: " + str(c))

    print("\nIngin Mengulang?(Y/n)\t:")
    ulg = input()
    
    os.system("cls")

