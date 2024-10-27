/* Crea un archivo HTML básico con la siguiente estructura:
En este desafío, simularemos un cambio de precio en un producto de un e-commerce.
Al cargar la página, queremos que el precio inicial de "$500" cambie a "$450" utilizando las propiedades getElementById() e innerText.
También modificar los estilos del título mediante querySelector.*/


 
    document.getElementById("precioProducto").innerText = "Precio: $450";

  
    const titulo = document.querySelector("#nombreProducto");
    titulo.style.color = "blue";
    titulo.style.fontSize = "24px";
    titulo.style.fontWeight = "bold";
