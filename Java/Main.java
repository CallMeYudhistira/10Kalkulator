import java.util.Scanner;

class Main {
    private static Double calc(Double a, Double b, String op) {
        double c = 0;

        if (op.equals("/") && b == 0) {
            System.out.println("\nTidak Bisa Dibagi Nol!");
        } else if (op.equals("+")) {
            c = a + b;
        } else if (op.equals("-")) {
            c = a - b;
        } else if (op.equals("*")) {
            c = a * b;
        } else if (op.equals("/")) {
            c = a / b;
        } else {
            System.out.println("\nOperator Tidak Valid!");
        }

        return c;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Double a, b, c = 0.0;
        String op, ulg;

        do {
            System.out.println("=====KALKULATOR SEDERHANA=====");
            System.out.print("\nMasukan Angka Pertama\t: ");
            a = scanner.nextDouble();
            System.out.print("Masukan Operator\t: ");
            scanner.nextLine();
            op = scanner.nextLine();
            System.out.print("Masukan Angka Kedua\t: ");
            b = scanner.nextDouble();

            c = calc(a, b, op);

            System.out.print("\nHasil\t\t\t: ");
            System.out.println(c);

            System.out.print("\nIngin Mengulang?(Y/n)\t: ");
            scanner.nextLine();
            ulg = scanner.nextLine();

            System.out.print("\033[H\033[2J");
            System.out.flush();
        } while (ulg.equals("Y") || ulg.equals("y"));

        scanner.close();
    }
}