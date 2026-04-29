function calc(a, b, op) {
    let c = 0;

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

function main() {
    const readline = require('node:readline');
    const { stdin: input, stdout: output } = require('node:process');
    const rl = readline.createInterface({ input, output });

    console.log("=====KALKULATOR SEDERHANA=====");
    rl.question("Masukan Angka Pertama\t: ", (a) => {
        rl.question("Masukan Operator\t: ", (op) => {
            rl.question("Masukan Angka Kedua\t: ", (b) => {
                const c = calc(Number(a), Number(b), op);

                console.log("\nHasil\t\t\t: ", c);

                rl.question("\nIngin Mengulang?(Y/n)\t: ", (ulg) => {
                    console.clear();
                    rl.close();
                    if (ulg == 'y' || ulg == 'Y') {
                        main();
                    }
                });
            });
        });
    });
}

main();