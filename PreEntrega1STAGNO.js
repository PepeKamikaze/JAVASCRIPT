let opcionMenu=0;
let bebidas='Agua $10\nCoca $90\nCerveza $250'
let comidas='Pancho $150\nPizza $1000\nChoripan $250'


const verMenu = () => {
    alert('----------\nBebidas\n----------\n'+bebidas+'\n----------\nComidas\n----------\n'+comidas+'\n');
    return;
}
const realizarPedido = () =>{
    let total=0
    alert('Ingrese la cantidad a pedir de cada producto:')
    total=total+parseFloat(prompt('Agua'))*10
    total=total+parseFloat(prompt('Coca'))*90
    total=total+parseFloat(prompt('Cerveza'))*250
    total=total+parseFloat(prompt('Pancho'))*150
    total=total+parseFloat(prompt('Pizza'))*1000
    total=total+parseFloat(prompt('Choripan'))*250
    alert('Total:$'+total)
}

alert('Bienvenidos al Bar\n')
opcionMenu=parseInt(prompt('Elija una acción\n[1] Ver Menu\n[2] Realizar Pedido\n[0] Salir'))
do {
    
    switch (opcionMenu) {
        case 0:
            break;
        case 1:
            verMenu()
            break;
        case 2:
            realizarPedido()
            break;
        default:
            opcionMenu=parseInt(prompt('La opcion ingresada no se encuentra en el menú.\nDesea volver al menú?\n[1] Sí\n [2] No'))
            if(opcionMenu===2)
                opcionMenu=0
            break;            
    }
    opcionMenu=parseInt(prompt('Elija una acción\n[1] Ver Menu\n[2] Realizar Pedido\n[0] Salir'))
} while (opcionMenu !=0);
alert('Gracias por su visita!')


