class Persona {

    static personasList = [];
    

    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;

        Persona.personasList.push(this);
    }

    creaObjeto() {
        const idH = document.getElementById("cc").value;
        const nombreH = document.getElementById("nombres").value;
        const emailH = document.getElementById("email").value;
        const rolH = document.getElementById("roles").value;

        var idRepetido = false;

        for (var i = 0; i < Persona.personasList.length; i++) {
            if (Persona.personasList[i].id === idH) {
                idRepetido = true;
                break;
            }
        }

        if (idRepetido) {
            alert("Ya existe un elemento con el ID: " + idH);
        } 
        else {
            var nuevaPersona = new Persona(idH, nombreH, emailH, rolH);
            nuevaPersona.leaObjeto();
        }
    }

    leaObjeto() {
        var fila = "<tr><td>" + this.id + "</td><td>" + this.nombre + "</td><td>" + this.email + "</td><td>" + this.rol + "</td>" +
            "<td><button class='btn btn-warning' onclick='actualizarRegistro(" + this.id + ")'>Actualizar</button></td>" +
            "<td><button class='btn btn-danger' onclick='eliminarRegistro(" + this.id + ")'>Eliminar</button></td></tr>";

        document.getElementById("tableD").innerHTML += fila;
    }

    deleteRegistro(id) {
        const index = Persona.personasList.findIndex(persona => persona.id === id);
        Persona.personasList.splice(index, 1);
        this.updateTable();
    }
    
    
    
    updateTable() {
        const tabla = document.getElementById("tableD");
    
        // Limpiar solo las filas de datos, manteniendo el encabezado
        for (let i = tabla.rows.length - 1; i > 0; i--) {
            tabla.deleteRow(i);
        }
    
        // Volver a dibujar la tabla con los datos actualizados
        Persona.personasList.forEach(persona => persona.leaObjeto());
    }
    
    
    
    clearInformation(){
        document.getElementById("cc").value ="";
        document.getElementById("nombres").value ="";
        document.getElementById("email").value ="";
        document.getElementById("roles").value ="";
    }

    
}




    

