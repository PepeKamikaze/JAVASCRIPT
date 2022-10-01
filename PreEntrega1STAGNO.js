let opcionMenu=0;
let bebidas=""
let comidas=""

const Listar = (lista) => {
    alert(lista);
    return;
}

alert("Bienvenidos al Bar\n")
do {
    opcionMenu=parseInt(prompt("Elija una acción\n1)Ingresar Bebidas\n2)Ingresar Comidas\n3)Listar Bebidas\n4)Listar Comidas\n0)Salir"))
    switch (opcionMenu) {
        case 0:
            break;
        case 1:
            bebidas=bebidas+"\n"+prompt("Ingrese una bebida")
            break;
        case 2:
            comidas=comidas+"\n"+prompt("Ingrese una comida")
            break;
        case 3:
            Listar(bebidas)
            break;
        case 4:
            Listar(comidas)
            break;        
        default:
            opcionMenu=parseInt(prompt("La opcion ingresada no se encuentra en el menú.\nDesea volver al menú?\n1)Sí\n2)No"))
            if(opcionMenu===2)
                opcionMenu=0
            break;            
    }
} while (opcionMenu !=0);
alert("Gracias por su visita!")


