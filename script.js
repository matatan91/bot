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
            console.log('Esperando 5 segundos antes de proceder con la activación...');
            activateScript();
        }, 5000);  // Esperamos 5 segundos antes de intentar activar el script
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
        // Usamos un selector más específico, buscando el contenedor del botón
        const button = document.querySelector('button.MuiButtonBase-root svg.MuiSvgIcon-root');
        
        if (button) {
            console.log('Botón encontrado, haciendo clic en el botón...');
            button.closest('button').click();  // Hace clic en el botón contenedor
            console.log('El script ha hecho clic en el botón en la página: ' + url);  // Log en la consola
            document.getElementById('statusMessage').innerText = 'El script está trabajando: el botón fue presionado en ' + url;
            document.getElementById('logMessage').innerText = 'El clic se realizó correctamente en el botón.';
        } else {
            console.log('No se pudo encontrar el botón en la página.');  // Log en la consola si no se encuentra el botón
            document.getElementById('statusMessage').innerText = 'No se pudo encontrar el botón en la página.';
            document.getElementById('logMessage').innerText = 'No se pudo encontrar el botón, no se realizó el clic.';
        }
    }, 5000);  // Aumentamos la espera a 5 segundos
}

function deactivateScript() {
    console.log('Desactivando el script...');
    document.getElementById('statusMessage').innerText = 'El script está desactivado.';
    document.getElementById('logMessage').innerText = 'El script ha sido desactivado.';
}

document.querySelector("#activarBoton").addEventListener("click", authenticateAndActivateScript);
document.querySelector("#desactivarBoton").addEventListener("click", deactivateScript);
