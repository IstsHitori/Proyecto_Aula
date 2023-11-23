const persona = new Persona();
function crearObjeto(){
    const documento = document.getElementById("validationCustom00").value;  
    if(persona.isDuplicate(documento)){
        alert("el documento está repetido");
    }else{
        persona.creaObjeto();
    }
}
function eliminarObjeto(){
    const documento = document.getElementById("validationCustom00").value;  
    if(persona.isDuplicate(documento)){
        persona.eliminar(documento);
    }else alert("No se encontró este usuario");
}
function editarObjeto(){
    const documento = document.getElementById("validationCustom00").value;
    if(persona.isDuplicate(documento)){
        persona.editar(documento);
    }else alert("No se encontró este usuario");  
}