function authenticateAndActivateScript() {
    const url = "https://conexen.services/provider/services/top-up-provider/available";
    
    console.log('Intentando autenticarse...');
    
    const username = "jorgeleandrom050@gmail.com";
    const password = "leandroabdiel**@";
    
    const loginUrl = "https://conexen.services/login"; // Asegúrate de que esta sea la URL correcta de inicio de sesión

    // Verificamos si estamos en la página de login
    if (window.location.href === loginUrl) {
        console.log('Estamos en la página de login, procediendo con la autenticación...');
        
        // Rellenar los campos de usuario y contraseña
        document.querySelector('input[name="email"]').value = username;
        document.querySelector('input[name="password"]').value = password;
        
        // Hacer clic en el botón de login
        document.querySelector('button[type="submit"]').click();
        console.log('Formulario de login enviado...');
        
        // Esperamos un poco para que la autenticación se complete antes de proceder con el script
        setTimeout(() => {
            // Verificamos si la autenticación fue exitosa
            if (window.location.href !== loginUrl) {
                console.log('Autenticación exitosa: redirigidos a la página principal.');
                document.getElementById('statusMessage').innerText = 'Autenticación exitosa.';
                activateScript();
            } else {
                console.log('Autenticación fallida: permanecemos en la página de login.');
                document.getElementById('statusMessage').innerText = 'Autenticación fallida. Verifique las credenciales.';
            }
        }, 5000);  // Esperamos 5 segundos antes de verificar el estado
    } else {
        console.log('No estamos en la página de login, procediendo a activar el script...');
        // Si no estamos en la página de login, directamente intentar activar el script
        activateScript();
    }
}

function activateScript() {
    const url = "https://conexen.services/provider/services/top-up-provider/available";
    
    console.log('Esperando para encontrar el botón...');
    
    // Esperamos un momento antes de intentar encontrar el botón
    setTimeout(() => {
        // Usamos un selecto
