//Simulador de turnos para modista en tienda de ropa

let nombre
let apellido

nombre = prompt("Ingre su Nombre: ");
apellido = prompt("Ingrese su Apellido: ");
    
if((nombre !="") && (apellido !="")){
    alert("Bienvenida " +nombre+ " " +apellido+ " a Tienda de Ropa!");
}else{
    alert("Error al ingresar su nombre y apellido por favor vuelva a ingresar");
}

let clienta
let turno
let dia
let mes

clienta = prompt("Ingrese el número correspondiente a la opción que desee realizar: 1- Turno para confección 2- Compras online 3- Otra consulta");

if (clienta == 1) {
    turno = prompt("Indique el turno que prefiera ingresando el número correspondiente: 1-15:00hs  2-16:00hs 3-17:00hs  4-18:00hs  5-19:00hs");

    function fecha(dia, mes) {
        alert("Turno para confección con fecha: " + " " + dia + "/" + mes)
    }

    for (let i = 1; i <= 3; i++) {
        dia = parseInt(prompt("Ingrese el día que desea su turno"));
        mes = parseInt(prompt("Ingrese el mes que desea su turno"));
        if ((dia <= 31)&&(mes<=12)){
            break;
        } else {
            alert("ERROR - Día y/o Mes mal ingresado")
        }
    }   
    fecha(dia, mes);

    switch (turno) {
        case "1":
            alert("Turno asignado a " + " " + nombre + " " + apellido+ " con fecha: "+dia+ "/" +mes+ " a las 15:00hs. La esperamos! Muchas gracias!" );
            break;
        case "2":
            alert("Turno asignado a " + " " + nombre + " " + apellido+ " con fecha: "+dia+ "/" +mes+ " a las 16:00hs. La esperamos! Muchas gracias!" );
            break;
        case "3":
            alert("Turno asignado a " + " " + nombre + " " + apellido+ " con fecha: "+dia+ "/" +mes+ " a las 17:00hs. La esperamos! Muchas gracias!" );
            break;
        case "4":
            alert("Turno asignado a " + " " + nombre + " " + apellido+ " con fecha: "+dia+ "/" +mes+ " a las 18:00hs. La esperamos! Muchas gracias!" );
            break;
        case "5":
            alert("Turno asignado a " + " " + nombre + " " + apellido+ " con fecha: "+dia+ "/" +mes+ " a las 19:00hs. La esperamos! Muchas gracias!" );
            break;
        default:
            alert("Opción de turno no válida! Por favor seleccione una opción del 1 al 5 dependiendo del turno que desee");
            break;
    }
    console.log(turno);

} else if (clienta == 2) {
    alert("Carrito de compras no disponible por el momento. Muchas gracias por su visita!");
} else {
    alert("Por favor comuníquese con nosotros. Muchas gracias!");
}