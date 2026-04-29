namespace Kalkulator{
    class Program{
        static double calc(double a, double b, char op){
            double c = 0;
	
            if (op == '/' && b == 0){
                Console.WriteLine("\nTidak Bisa Dibagi Nol!");
            } else if (op == '+') {
                c = a + b;
            } else if (op == '-') {
                c = a - b;
            } else if (op == '*') {
                c = a * b;
            } else if (op == '/') {
                c = a / b;
            } else {
                Console.WriteLine("\nOperator Tidak Valid!");
            }
            
            return c;
        }

        static void Main(string[] args){
            double a, b, c = 0;
            char op, ulg;

            do{
                Console.WriteLine("=====KALKULATOR SEDERHANA=====");
                Console.Write("\nMasukan Angka Pertama\t: ");
                a = Convert.ToDouble(Console.ReadLine());
                Console.Write("Masukan Operator\t: ");
                op = Convert.ToChar(Console.ReadLine());
                Console.Write("Masukan Angka Kedua\t: ");
                b = Convert.ToDouble(Console.ReadLine());
                
                c = calc(a, b, op);
                
                Console.WriteLine("\nHasil\t\t\t: " + c);
                
                Console.Write("\nIngin Mengulang?(Y/n)\t: ");
                ulg = Convert.ToChar(Console.ReadLine());
                Console.Clear();
            } while(ulg == 'y' || ulg == 'Y');
        }
    }
}