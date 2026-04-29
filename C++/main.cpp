#include<iostream>
using namespace std;

float calc(float a, float b, char op){
	float c = 0;
	
	if (op == '/' && b == 0){
		cout<<"\nTidak Bisa Dibagi Nol!";
	} else if (op == '+') {
		c = a + b;
	} else if (op == '-') {
		c = a - b;
	} else if (op == '*') {
		c = a * b;
	} else if (op == '/') {
		c = a / b;
	} else {
		cout<<"\nOperator Tidak Valid!";
	}
	
	return c;
}

int main(){
	float a, b, c = 0;
	char op, ulg;
	
	do{
		cout<<"=====KALKULATOR SEDERHANA=====";
		cout<<"\nMasukan Angka Pertama\t: ";
		cin>>a;
		cout<<"Masukan Operator\t: ";
		cin>>op;
		cout<<"Masukan Angka Kedua\t: ";
		cin>>b;
		
		c = calc(a, b, op);
		
		cout<<"\nHasil\t\t\t: "<<c;
		
		cout<<"\nIngin Mengulang?(Y/n)\t: ";
		cin>>ulg;
		system("cls");
	} while(ulg == 'y' || ulg == 'Y');
	
	return 0;
}
