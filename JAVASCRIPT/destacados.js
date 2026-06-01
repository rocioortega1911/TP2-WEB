const tarjetas =
document.querySelectorAll(".tarjeta");

const contador =
document.getElementById("contador");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener(
        "click",
        () => {

            tarjeta.classList.toggle(
                "seleccionada"
            );

            const cantidad =
            document.querySelectorAll(
                ".seleccionada"
            ).length;

            if(cantidad > 0){

                contador.textContent =
                "Tarjetas seleccionadas: "
                + cantidad;

            }else{

                contador.textContent =
                "Tarjetas seleccionadas: 0";

            }

        }
    );

});