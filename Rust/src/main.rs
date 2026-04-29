use std::io::{Write, stdin, stdout};
use std::process::Command;

fn calc(a: f32, b: f32, op: char) -> f32 {
    let mut c = 0.0;

    if op == '/' && b == 0.0 {
        println!("\nTidak Bisa Dibagi Nol!");
    } else if op == '+' {
        c = a + b;
    } else if op == '-' {
        c = a - b;
    } else if op == '*' {
        c = a * b;
    } else if op == '/' {
        c = a / b;
    } else {
        println!("\nOperator Tidak Valid!");
    }

    c
}

fn main() {
    let mut input = String::new();

    loop{
        println!("=====KALKULATOR SEDERHANA=====");

        print!("Masukan Angka Pertama\t: ");
        input.clear();
        stdout().flush().unwrap();
        stdin().read_line(&mut input).unwrap();
        let a: f32 = input.trim().parse().unwrap();

        print!("Masukan Operator\t: ");
        input.clear();
        stdout().flush().unwrap();
        stdin().read_line(&mut input).unwrap();
        let op: char = input.trim().chars().next().unwrap();

        print!("Masukan Angka Kedua\t: ");
        input.clear();
        stdout().flush().unwrap();
        stdin().read_line(&mut input).unwrap();
        let b: f32 = input.trim().parse().unwrap();

        let c = calc(a, b, op);

        println!("\nHasil\t\t\t: {}", c);

        print!("\nIngin Mengulang?(Y/n)\t: ");
        input.clear();
        stdout().flush().unwrap();
        stdin().read_line(&mut input).unwrap();
        let ulg: char = input.trim().chars().next().unwrap();

        if ulg != 'Y' && ulg != 'y' {
            break;
        }

        Command::new("cmd").args(["/C", "cls"]).status().unwrap();
    }
}
