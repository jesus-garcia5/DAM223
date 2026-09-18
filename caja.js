const redline = require("redline");


const pedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombre,precio){
    
    pedidos.push({
        nombre: nombre,
        precio: precio
    });
    totalAcumulado += precio;
}
agregarPedido("pizza",80);
agregarPedido("Hamburguesa",100);
agregarPedido("sopa",70);
agregarPedido("tacos",190);
agregarPedido("filete",380);
agregarPedido("marisco",170);

console.log(pedidos);
console.log("total:", totalAcumulado);