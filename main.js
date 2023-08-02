document.getElementById("cotizacion").addEventListener("click", function() {
    function calcularPrestamo() {
        let cuotas = parseInt(prompt("En automotora VTI tu próximo auto a solo un click, elige la cantidad de cuotas pagar: 12, 24, 36 o 48 incluyen interés"));

        const calcularInteres = (valor, porcentaje) => {
            return (valor * porcentaje) / 100;
        };

        const calcularCuotas = (prestamo, cuotas) => {
            return prestamo / cuotas;
        };

        if (cuotas === 12 || cuotas === 24 || cuotas === 36 || cuotas === 48) {
            let valor = parseInt(prompt("Ingrese el valor en dólares del automovil que usted desea comprar:"));
            if (cuotas === 12) {
                let porcentaje = 7;
                let interes = calcularInteres(valor, porcentaje);
                let totalPrestamo = valor + interes;
                let valorCuota = calcularCuotas(totalPrestamo, cuotas);
                alert("El valor de cada cuota sería de: " + valorCuota + " dólares a pagar en 12 meses");
            } else if (cuotas === 24) {
                let porcentaje = 12;
                let interes = calcularInteres(valor, porcentaje);
                let totalPrestamo = valor + interes;
                let valorCuota = calcularCuotas(totalPrestamo, cuotas);
                alert("El valor de cada cuota sería de: " + valorCuota + " dólares a pagar en 24 meses");
            } else if (cuotas === 36) {
                let porcentaje = 15;
                let interes = calcularInteres(valor, porcentaje);
                let totalPrestamo = valor + interes;
                let valorCuota = calcularCuotas(totalPrestamo, cuotas);
                alert("El valor de cada cuota sería de: " + valorCuota + " dólares a pagar en 36 meses");
            } else if (cuotas === 48) {
                let porcentaje = 20;
                let interes = calcularInteres(valor, porcentaje);
                let totalPrestamo = valor + interes;
                let valorCuota = calcularCuotas(totalPrestamo, cuotas);
                alert("El valor de cada cuota sería de: " + valorCuota + " dólares a pagar en 48 meses");
            }
        } else {
            alert("Tienes que elegir una de las 4 opciones de cuotas: 12, 24, 36 o 48");
        }
    }

    do {
        calcularPrestamo();
    } while (confirm("¿Quieres calcular otro plan de pago?"));

    alert("Gracias por preferir automotora VTI");
});


const Auto = function(modelo, precio, disponibles){
this.modelo=modelo;
this.precio=precio;
this.disponibles=disponibles
}

let auto1 = new Auto("chevrolet corsa",5500,"rojo") 
let auto2 = new Auto("fiat uno",4500,"azul") 
let auto3 = new Auto("toyota corolla",7000,"gris plata") 
let auto4 = new Auto("honda civic",7500,"blanco") 
let auto5 = new Auto("volkswagen gol",6500,"negro") 
let auto6 = new Auto("peugeot 307",8000,"bordo") 
let auto7 = new Auto("volkswagen vento",10000,"gris nardo") 
let auto8 = new Auto("peugeot 206",6000,"rojo") 

let lista = [auto1,auto2,auto3,auto4,auto5,auto6,auto7,auto8]

function filtrarAuto()
{
    let busquedausuario = prompt("Ingrese aqui el auto que desea buscar")
    let resultadobusqueda = lista.filter( (Auto)=> Auto.modelo.includes(busquedausuario))

    if (resultadobusqueda.length > 0){
        console.table(resultadobusqueda)
    }else{
        alert("No encontramos el modelo de auto que desea en nuestro garage")
     }    
    }
let boton = document.getElementById("filtrarAuto")

document.getElementById("filtrarAuto").addEventListener("click", filtrarAuto);

function agregarAuto(){
    let modelo = prompt("ingresa la marca seguida del modelo")
    let precio = parseInt (prompt("Ingresa el precio en dolares que deseas vender tu auto"))
    let color = prompt("ingresa el color de tu auto")
    if( modelo === "" || isNaN(precio) || color === ""){}

    let auto = new Auto(modelo, precio, color)

    lista.push(auto)
    console.table(lista)
let button= document.getElementById("agregarAuto")}

document.getElementById("agregarAuto").addEventListener("click", agregarAuto);