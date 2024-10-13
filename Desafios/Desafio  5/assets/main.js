let productos = [
    { nombre: 'Manzana', stock: 10 },
    { nombre: 'Zapallo', stock: 5 },
    { nombre: 'Pera', stock: 7 },
    { nombre: 'Sandia', stock: 3 },
  ];
  

  console.log('Lista de productos y su stock:');
  for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i].nombre}: ${productos[i].stock} en stock`);
  }
  
  
  console.log('\n venta...');
  

  let productoVendido = productos.pop();
  console.log(`Producto vendido: ${productoVendido.nombre}`);
  
 
  console.log('Nuevo stock de productos:');
  for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i].nombre}: ${productos[i].stock} en stock`);
  }
  
  
