
    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Aquí iría el código para autenticar las credenciales con la API de conexiones
        // Suponemos que la autenticación es exitosa
        document.getElementById('authenticated').style.display = 'block';
    });

    function activateScript() {
        const button = document.querySelector('button.MuiButtonBase-root.MuiFab-root.MuiFab-circular.MuiFab-sizeSmall.MuiFab-primary');
        if (button) {
            button.click();
        } else {
            console.log("Botón no encontrado.");
        }
    }

    function deactivateScript() {
        console.log("Script desactivado.");
    }

    document.querySelector("#activarBoton").addEventListener("click", activateScript);
    document.querySelector("#desactivarBoton").addEventListener("click", deactivateScript);
    