const alimentos = [

    {
        nombre: "Manzana",
        categoria: "fruta"
    },

    {
        nombre: "Banana",
        categoria: "fruta"
    },

    {
        nombre: "Pera",
        categoria: "fruta"
    },

    {
        nombre: "Pizza",
        categoria: "comida"
    },

    {
        nombre: "Empanada",
        categoria: "comida"
    },

    {
        nombre: "Hamburguesa",
        categoria: "comida"
    }

];

const lista =
document.getElementById("lista");

function mostrarElementos(datos){

    lista.innerHTML = "";

    datos.forEach(item => {

        const tarjeta =
        document.createElement("div");

        tarjeta.classList.add(
            "tarjeta"
        );

        tarjeta.textContent =
        item.nombre;

        lista.appendChild(
            tarjeta
        );

    });

}

mostrarElementos(
    alimentos
);

document
.getElementById("todos")
.addEventListener(
    "click",
    () => {

        mostrarElementos(
            alimentos
        );

    }
);

document
.getElementById("frutas")
.addEventListener(
    "click",
    () => {

        const frutas =
        alimentos.filter(
            item =>
            item.categoria ===
            "fruta"
        );

        if(frutas.length > 0){

            mostrarElementos(
                frutas
            );

        }

    }
);