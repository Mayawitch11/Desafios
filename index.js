do {
  producto = prompt("Buenos días! Qué desea comprar?\nmantas, ropa o bolso");
  cantidad = prompt("Ingrese cantidad");
  switch (producto) {
    case "mantas":
      precio = 4000;
     // const total1 = new compra('mantas')
      break;
    case "ropa":
      precio = 8000;
      //const total2 = new compra('ropa', cantidad)
      break;
    case "bolso":
      precio = 2000;
      break;
    default:
      alert("Este producto no existe");
      precio = 0;
      cantidad = 0;
      break;
  }

  continuaCompra = confirm('Desea comprar algo más?')
} while (continuaCompra);

total = (producto*cantidad)+envio;