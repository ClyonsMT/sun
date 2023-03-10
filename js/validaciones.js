const submit = document.querySelector('.container_formulario');

submit.addEventListener('submit', (evento) => {
    evento.preventDefault();
    swal({
        title: "Postulación recibida con exito",
        text: "Te contactaremos si fuiste seleccionado para la entrevista",
        icon: "success",
        button: "Gracias, que amable"
    });
})