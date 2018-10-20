// Función del botón de mandar mensaje el cual lo plasma en la sección correspondiente del HTML
send = () => {
    let mensaje = textarea.value;
    if (mensaje !== "") {
        let idNum = document.getElementsByClassName('number').length;
        //console.info(idNum);
        message.innerHTML += `
<div class="number col-12" id="comment${idNum}">
    <p>${mensaje}</p>
    <button type="button" class="btn btn-outline-dark mb-2" onclick="deleteMsg(${idNum})">Eliminar</button>
</div>
`;
        //console.info(`comment${idNum}`);
        textarea.value = "";
    } else { alert('Mensaje vacío.') }
};

// Función que borra el mensaje del HTML
deleteMsg = (idNum) => {
    //console.log(idNum)
    let deleteMensaje = document.getElementById(`comment${idNum}`);
    //console.info(`comment${idNum}`);
    deleteMensaje.innerHTML = ``;
};