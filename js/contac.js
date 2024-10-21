function infContacto(evento) {    // código para guardar datos
    evento.preventDefault();
    alert("Datos guardados con exito");
    
    }

    function Resetearform() {
       document.forms["fcontacto"].reset(); 
    } 

    function regresar() {
        history.back();
    }

