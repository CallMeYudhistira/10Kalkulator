package main

import (
	"fmt"
	"os"
	"os/exec"
)

func calc(a float32, b float32, op string) float32 {
	var c float32 = 0.0

	if op == "/" && b == 0.0 {
		fmt.Println("\nTidak Bisa Dibagi Nol!")
	} else if op == "+" {
		c = a + b
	} else if op == "-" {
		c = a - b
	} else if op == "*" {
		c = a * b
	} else if op == "/" {
		c = a / b
	} else {
		fmt.Println("\nOperator Tidak Valid!")
	}

	return c
}

func main() {
	var a, b, c float32
	var op string

	for ulg := "y"; ulg == "y" || ulg == "Y"; {
		fmt.Println("=====KALKULATOR SEDERHANA=====")

		fmt.Print("Masukan Angka Pertama\t: ")
		fmt.Scan(&a)

		fmt.Print("Masukan Operator\t: ")
		fmt.Scan(&op)

		fmt.Print("Masukan Angka Kedua\t: ")
		fmt.Scan(&b)

		c = calc(a, b, op)

		fmt.Println("\nHasil\t\t\t: ", c)

		fmt.Print("\nIngin Mengulang?(Y/n)\t: ")
		fmt.Scan(&ulg)

		cmd := exec.Command("cmd", "/c", "cls")
		cmd.Stdout = os.Stdout
		cmd.Run()
	}
}
