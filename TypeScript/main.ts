import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


function calc(a: number, b: number, op: string) {
    let c: number = 0;

    if (op == '/' && b == 0) {
        console.log("\nTidak Bisa Dibagi Nol!");
    } else if (op == '+') {
        c = a + b;
    } else if (op == '-') {
        c = a - b;
    } else if (op == '*') {
        c = a * b;
    } else if (op == '/') {
        c = a / b;
    } else {
        console.log("\nOperator Tidak Valid!");
    }

    return c;
}

async function main() {
    const rl = readline.createInterface({ input, output });

    while(true){
        console.log("=====KALKULATOR SEDERHANA=====");
        const a = await rl.question("Masukan Angka Pertama\t: ");
        const op = await rl.question("Masukan Operator\t: ");
        const b = await rl.question("Masukan Angka Kedua\t: ");

        const c = calc(Number(a), Number(b), op);

        console.log("\nHasil\t\t\t: ", c);

        const ulg = await rl.question("\nIngin Mengulang?(Y/n)\t: ");
        if (ulg != 'y' && ulg != 'Y'){
            rl.close();
            break;
        }
        console.clear();
    }
}

main();