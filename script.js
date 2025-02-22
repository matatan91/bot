function activateScript() {
    const url = "https://conexen.services/provider/services/top-up-provider/available";
    
    console.log('Esperando para encontrar el botón...');
    
    // Esperamos un momento antes de intentar encontrar el botón
    setTimeout(() => {
        // Actualizamos el selector para buscar el contenedor del botón que contiene el <svg>
        const button = document.querySelector('button.MuiButtonBase-root svg.MuiSvgIcon-root');
        if (button) {
            button.closest('button').click();  // Hace clic en el botón contenedor
            console.log('El script ha hecho clic en el botón en la página: ' + url);  // Log en la consola
            document.getElementById('statusMessage').innerText = 'El script está trabajando: el botón fue presionado en ' + url;
        } else {
            console.log('No se pudo encontrar el botón en la página.');  // Log en la consola si no se encuentra el botón
            document.getElementById('statusMessage').innerText = 'No se pudo encontrar el botón en la página.';
        }
    }, 2000);  // Espera 2 segundos antes de intentar hacer clic en el botón
}

function deactivateScript() {
    document.getElementById('statusMessage').innerText = 'El script está desactivado.';
}

document.querySelector("#activarBoton").addEventListener("click", activateScript);
document.querySelector("#desactivarBoton").addEventListener("click", deactivateScript);
