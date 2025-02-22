function activateScript() {
    const url = "https://conexen.services/provider/services/top-up-provider/available";
    
    console.log('Esperando para encontrar el botón...');

    // Esperamos un momento antes de intentar encontrar el botón
    setTimeout(() => {
        // Usamos un selector más robusto, esperando que el botón tenga un SVG dentro
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
    }, 5000);  // Aumentamos la espera a 5 segundos para asegurar que la página cargue correctamente
}

function deactivateScript() {
    console.log('Desactivando el script...');
    document.getElementById('statusMessage').innerText = 'El script está desactivado.';
    document.getElementById('logMessage').innerText = 'El script ha sido desactivado.';
}

// Controladores de eventos para activar y desactivar el script
document.querySelector("#activarBoton").addEventListener("click", activateScript);
document.querySelector("#desactivarBoton").addEventListener("click", deactivateScript);

