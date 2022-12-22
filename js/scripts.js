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
    alert("Usted ingresó la opción 2 correspondiente al carrito de compras");
    const productos = [
        {tipo:"SHORT", color:"negro", precio:"5000", talle:"xs", modelo:"Magnolia"},
        {tipo:"SHORT", color:"blanco", precio:"5000", talle:"s", modelo:"Esmeralda"},
        {tipo:"REMERA", color:"rojo", precio:"6000", talle:"m", modelo:"Lourdes"},
        {tipo:"CAMISA", color:"blanco", precio:"10000", talle:"m", modelo:"Angelica"},
        {tipo:"VESTIDO", color:"negro", precio:"25000", talle:"s", modelo:"Rubi"},
        {tipo:"REMERA", color:"amarillo", precio:"6000", talle:"l", modelo:"Victoria"},
        {tipo:"POLLERA", color:"negro", precio:"5000", talle:"l", modelo:"Sofía"},
        {tipo:"MONO", color:"negro", precio:"35000", talle:"s", modelo:"Azul"},
        {tipo:"VESTIDO", color:"rojo", precio:"25000", talle:"m", modelo:"Denise"},
        {tipo:"TOP", color:"gris", precio:"3000", talle:"xs", modelo:"María"}];
    
    let carritoDeCompras =[]
    
    let seleccion = prompt("Usted desea ingresar algún producto al carrito de compras? Si o No");
    
    while (seleccion != "si" && seleccion != "no"){
        alert("Por favor ingrese (si) o (no)")
        seleccion = prompt("Hola desea agregar algún producto al carrito de compras? Ingrese Si o No")
    }
    
    if(seleccion == "si"){
        alert("A continuación le mostraremos nuestra lista de productos en stock")
        let productosEnStock = productos.map((producto)=> producto.tipo + " color: " + producto.color + " $" +producto.precio+ " talle: " + producto.talle + " modelo: " +producto.modelo);
        alert(productosEnStock.join(" - "))
    } else if (seleccion == "no"){
        alert("Muchas gracias por su visita!")
    }
    
    while(seleccion != "no"){
        let producto = prompt ("Escribí el producto que desees agregar a tu carrito: ");
        let precio = 0
    
        if (producto == "short" || producto == "vestido" || producto == "camisa" || producto == "top" || producto == "pollera" || producto == "remera" || producto == "mono"){
            switch(producto){
                case "short":
                    precio = 5000;
                    break;
                case "remera":
                    precio = 6000;
                    break;
                case "camisa":
                    precio = 10000;
                    break;
                case "vestido":
                    precio = 25000;
                    break;
                case "pollera":
                    precio = 5000;
                    break;
                case "mono":
                    precio = 35000;
                    break;
                case "top":
                    precio = 3000;
                    break;
                default:
                    break;
            }
            let unidades = parseInt(prompt("Cuántos productos de ese tipo desea agregar?"))
    
            carritoDeCompras.push({producto, unidades, precio})
            console.log(carritoDeCompras)
        }else{
            alert("No tenemos disponibilidad de ese producto por el momento.");
        }
    
        seleccion = prompt("Desea agregar otro producto? De ser así escriba el tipo de producto")
        while (seleccion == "no"){
            alert("Muchas gracias por su compra!");
            carritoDeCompras.forEach((carritoFinal)=> {
                console.log(`Producto: ${carritoFinal.tipo}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades*carritoFinal.precio}`)
                })
        break;
        }
    }
    const total = carritoDeCompras.reduce((a,el)=> a + el.precio * el.unidades,0);
    alert(`El valor total de su compra es: ${total}`);

} else {
    alert("Por favor comuníquese con nosotros. Muchas gracias!");
}