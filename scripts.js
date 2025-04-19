function enviarDatos() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Simulación de envío de datos (reemplazar con llamada AJAX real)
    const datos = {
        email: email,
        password: password
    };

    alert("Datos a enviar (simulado):\n" + JSON.stringify(datos, null, 2));

    // En una aplicación real, aquí iría tu código AJAX para enviar 'datos' al backend.
    // Ejemplo usando the Fetch API:
    /*
    fetch('/api/login', { // Reemplaza '/api/login' con la URL de tu backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del backend:', data);
        alert('Inicio de sesión exitoso (simulado). Respuesta: ' + JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
        alert('Error al enviar datos (simulado).');
    });
    */
}

// Evitar el envío tradicional del formulario (opcional si solo usas el botón con onclick)
document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    enviarDatos(); // Llama a nuestra función de envío de datos
});


function enviarDatos() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Datos a enviar al backend:
    const datos = {
        email: "email@usuario.com",
        password: "passwordUsuario1-/" 
    };

    alert("Datos a enviar (simulado):\n" + JSON.stringify(datos, null, 2));

    //  En una aplicación real, así sería el código AJAX para enviar 'datos' al backend.
    //  Ejemplo usando Fetch API:
    /*
        fetch('/api/login', { // URL del endpoint del backend para iniciar sesión.
            method: 'POST', // Método HTTP utilizado para enviar los datos.
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON.
            },
            body: JSON.stringify(datos) // Los datos a enviar, convertidos a formato JSON.
        })
        .then(response => response.json()) // Procesa la respuesta del backend como JSON.
        .then(data => {
            console.log('Respuesta del backend:', data); // Muestra la respuesta en la consola.
            alert('Inicio de sesión exitoso (simulado). Respuesta: ' + JSON.stringify(data)); // Muestra una alerta con la respuesta.
        })
        .catch(error => {
            console.error('Error al enviar datos:', error); // Muestra un error en la consola si la llamada falla.
            alert('Error al enviar datos (simulado).'); // Muestra una alerta de error.
        });
        */
}