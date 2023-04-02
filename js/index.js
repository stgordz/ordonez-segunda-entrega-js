class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio= precio;
    }
}
//items
const vaporizador = new Producto ("Vaporizador", 10000)
const liquidos = new Producto ("Liquidos", 3000)
const repuestos = new Producto ("Repuestos", 2500)
class Carrito {
    constructor() {
        this.items = [];
    }
    agregar(item) {
        this.items.push(item);
    }
    calcularTotal() {
        return this.items.reduce((total, item) => total + item.precio, 0);
    }
    vaciar() {
        this.items = [];
    }

}//tienda
const carrito = new Carrito();
function agregarProducto() {
    let tienda = prompt("¿ Qué articulo desea comprar ?\n 1: Vaporizadores\n 2: Liquidos o sales \n 3: Repuestos \n 4: Ir a la caja, para poder pagar")

    do {
        switch (tienda) {
            case "1":
                let numVaporizador = Number(prompt(`El precio de cada ${vaporizador.nombre} es de: ${vaporizador.precio}$\nIngrese la cantidad de ${vaporizador.nombre}es que desea llevar:`));
                for (let i = 0; i < numVaporizador; i++) {
                    carrito.agregar(vaporizador);
                }
                break;
            case "2":
                let numLiquidos = Number(prompt(`El precio de los ${liquidos.nombre} es de: ${liquidos.precio}$\nIngrese la cantidad de ${liquidos.nombre} que desea llevar:`));
                for (let i = 0; i < numLiquidos; i++) {
                    carrito.agregar(liquidos);
                }
                break;
            case "3":
                let numRepuestos = Number(prompt(`El precio de los ${repuestos.nombre} es de: ${repuestos.precio}$\nIngrese la cantidad de ${repuestos.nombre} que desea llevar:`));
                for (let i = 0; i < numRepuestos; i++) {
                    carrito.agregar(repuestos);
                }
                break;
            case "4":
                alert("Gracias por su compra.")
                break;
            default:
                alert("Por favor, seleccione una opción válida.")
                break;
        }
        if (tienda !== "4") {
            tienda = prompt("¿Desea seguir comprando?\n 1: Vaporizadores \n 2: Liquidos o sales \n 3: Repuestos \n 4: Ir a caja para concluir pago")
        }
    } while (tienda !== "4")}

let i = 2

do {
    let usuario = prompt("Ingrese su nombre de usuario:")
    let contrasena = prompt("Ingrese su contraseña:")
    //usuario = usuario.toUpperCase()
    //contrasena = contrasena.toUpperCase()

    if (usuario === "cliente" && contrasena === "123456") {
        i = -1
        alert(" Bienvenido a la tienda online ")
        let num;
        do {
            num = Number(prompt(" Seleccione una opción:\n 1: Agregar al carrito\n 2: Ver total\n 3: Comprar\n 4:Imprimir factura con IVA \n 5: Salir"))
            switch (num) {
                case 1:
                    agregarProducto();
                    break;
                case 2:
                    alert(`El total de su compra es de ${carrito.calcularTotal()}$`);
                    break;
                case 3:
                    alert("Gracias por su compra.");
                    carrito.vaciar();
                    break;
                case 4:
                    let precioNeto = carrito.calcularTotal();
                    let precioIva = precioNeto * 1.21;
                    alert("El precio neto es: " + precioNeto + " $ \n El precio total mas IVA es: " + precioIva + " $")
                case 5:
                    alert(" Hasta luego, gracias por su compra ")
                    break;
                default:
                    alert(" Por favor, seleccione una opción valida.")
                    break;
            }
        } while (num !== 5)

    } else {
        i = i - 1
        alert("Error de inicio. Revise su usuario o contraseña. Le quedan " + (i + 1) + " intentos")
        if (i === -1) {
            alert("Muchos intentos fallidos. Intente nuevamente en unos minutos.")
        }
    }
} while (i >= 0)