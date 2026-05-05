document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || mensaje === ""){
        mostrar("Complete los campos obligatorios ❗");
        return;
    }

    if(!correo.includes("@")){
        mostrar("Correo inválido ❗");
        return;
    }

    mostrar("Mensaje enviado correctamente ✔");
    this.reset();
});

function mostrar(texto){
    document.getElementById("respuesta").innerText = texto;
}

function enviarWhatsApp(){
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    let url = `https://wa.me/59177777777?text=Hola, soy ${nombre}. ${mensaje}`;
    window.open(url, "_blank");
}