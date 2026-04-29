<?php

function calc($a, $b, $op)
{
    $c = 0;

    if ($op == '/' && $b == 0) {
        echo "\nTidak Bisa Dibagi Nol!";
    } else if ($op == '+') {
        $c = $a + $b;
    } else if ($op == '-') {
        $c = $a - $b;
    } else if ($op == '*') {
        $c = $a * $b;
    } else if ($op == '/') {
        $c = $a / $b;
    } else {
        echo "\nOperator Tidak Valid!";
    }

    return $c;
}

do {
    echo "=====KALKULATOR SEDERHANA=====\n";

    $a = readline("Masukan Angka Pertama\t: ");
    $op = readline("Masukan Operator\t: ");
    $b = readline("Masukan Angka Kedua\t: ");

    $c = calc($a, $b, $op);

    echo "\nHasil\t\t\t: " . $c;

    $ulg = readline("\nIngin Mengulang?(Y/n)\t: ");
    system("clear");
} while ($ulg == 'y' || $ulg == 'Y');