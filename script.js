
    function activateScript() {
        const url = "https://conexen.services/provider/services/top-up-provider/available";
        const button = document.querySelector('button.MuiButtonBase-root.MuiFab-root.MuiFab-circular.MuiFab-sizeSmall.MuiFab-primary');
        
        if (button) {
            button.click();  // Hace clic en el botón
            console.log('El script ha hecho clic en el botón en la página: ' + url);  // Log en la consola
            document.getElementById('statusMessage').innerText = 'El script está trabajando: el botón fue presionado en ' + url;
        } else {
            console.log('No se pudo encontrar el botón en la página.');  // Log en la consola si no se encuentra el botón
            document.getElementById('statusMessage').innerText = 'No se pudo encontrar el botón en la página.';
        }
    }

    function deactivateScript() {
        document.getElementById('statusMessage').innerText = 'El script está desactivado.';
    }

    document.querySelector("#activarBoton").addEventListener("click", activateScript);
    document.querySelector("#desactivarBoton").addEventListener("click", deactivateScript);
    