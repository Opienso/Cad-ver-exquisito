let menu = 0;
let bandera = true;
do{
    let menu = parseInt(prompt("------MENU------\n1-Suma\n2-Resta\n3-Multiplicacón\n4-División\n5-Salir"));

    if(menu < 0 || menu > 5){
        alert("Dato ingresado no valido. Ingrese nuevamente");
    }
    
    switch (menu) {
        case 1:
            suma();
            break;
        case 2:
            resta();
            break;
        case 3:
            multiplicacion();
            break;
        case 4:
            division();
            break;
        case 5:
            bandera = false;
            break;
        default:
            break;
    }
}while(bandera == true)

alert("Nos vemos amigazo");

function suma(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let suma = num1 + num2;
    alert(suma);
}

function resta(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let resta = num1 - num2;
    alert(resta);
}

function multiplicacion(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let multiplicacion = num1 * num2;
    alert(multiplicacion);
}

function division(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let division = num1 / num2;
    alert(division);
}
