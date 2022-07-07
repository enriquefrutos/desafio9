let boton = document.getElementById ('formulario')
boton.addEventListener('submit', validarformulario);
    
function validarformulario (e){
    e.preventDefault();
    swal({
        title: "Terminado!",
        text: "Se completo el registro",
        icon: "success",
        button: "Listo",
      })
    let datos = e.target
    let li = document.createElement("li");
    li.innerHTML = datos.children[0].value + ' ' + datos.children[1].value;
    padre.append(li);
    localStorage.setItem("clientes", JSON.stringify(datos.children[0].value + datos.children[1].value));
    let nombre = datos.children[0].value
    let apellido = datos.children[1].value
    let clientes = [nombre, apellido]
    //ternario
    apellido ? alert(`sr ${apellido +' ' + nombre} se pudo registrar`)  :
        alert("no te pudiste registrar");
        //desestructuracion
        const [a,b] = clientes
        alert(`desestructuracion ${a + ' ' + b}`)
        //spread
    let clientes1 = [...clientes]
    alert(`spread, copia ${clientes1}`);
        
}
