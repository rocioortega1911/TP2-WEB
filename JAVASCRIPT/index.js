const meriendas = [
    "Tostadas",
    "Yogur",
    "Frutas",
    "Galletitas",
    "Licuado"
];

const contenedor =
document.getElementById("meriendas");

meriendas.forEach(merienda => {

    const tarjeta =
    document.createElement("div");

    tarjeta.classList.add("tarjeta");

    tarjeta.textContent =
    merienda;

    contenedor.appendChild(tarjeta);

});

function mostrarCantidad(){

    if(meriendas.length > 0){

        document
        .getElementById("resultado")
        .textContent =
        "Hay " +
        meriendas.length +
        " meriendas disponibles";

    }else{

        document
        .getElementById("resultado")
        .textContent =
        "No hay meriendas";

    }

}

document
.getElementById("btnCantidad")
.addEventListener(
    "click",
    mostrarCantidad
);