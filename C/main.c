#include<stdio.h>

float calc(float a, float b, char op){
	float c = 0;
	
	if (op == '/' && b == 0){
		printf("\nTidak Bisa Dibagi Nol!");
	} else if (op == '+') {
		c = a + b;
	} else if (op == '-') {
		c = a - b;
	} else if (op == '*') {
		c = a * b;
	} else if (op == '/') {
		c = a / b;
	} else {
		printf("\nOperator Tidak Valid!");
	}
	
	return c;
}

int main(){
	float a, b, c = 0;
	char op, ulg;
	
	do{
		printf("=====KALKULATOR SEDERHANA=====");
		printf("\nMasukan Angka Pertama\t: ");
		scanf("%f", &a);
		printf("Masukan Operator\t: ");
		scanf(" %c", &op);
		printf("Masukan Angka Kedua\t: ");
		scanf("%f", &b);
		
		c = calc(a, b, op);
		
		printf("\nHasil\t\t\t: %f", c);
		
		printf("\nIngin Mengulang?(Y/n)\t: ");
		scanf(" %c", &ulg);
		system("cls");
	} while(ulg == 'y' || ulg == 'Y');
	
	return 0;
}
