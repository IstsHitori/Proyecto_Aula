
var codigo = 1;
var documentos = [];

function enviarDatos(){
    var nombre = document.getElementById("validationCustom01").value; 
    var apellido = document.getElementById("validationCustom02").value;
    var nombreUsuario = document.getElementById("validationCustomUsername").value;
    var ciudad = document.getElementById("validationCustom03").value;
    var estado = document.getElementById("validationCustom04").value;
    var zip = document.getElementById("validationCustom05").value;
    var documento = document.getElementById("validationCustom00").value;

    alert(documento);

    for(var i in documentos){
        if(i == documento){
            alert("ya existe")
        }else{

            document.getElementById("tableID").innerHTML +=  `<tr>
            <th scope="row">${codigo}</th>
            <td>${documento}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${nombreUsuario}</td>
            <td>${ciudad}</td>
            <td>${estado}</td>
            <td>${zip}</td>
          </tr>`
          codigo+= 1;
            documentos.push(documento);
          return;
    
        }

    }
}