
    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulación de autenticación con las credenciales
        // Aquí podrías hacer una solicitud a un backend para validar las credenciales
        if (username === 'miUsuario' && password === 'miContraseña') {
            document.getElementById('authenticated').style.display = 'block';
            document.getElementById('authMessage').innerText = 'Autenticación exitosa';
        } else {
            document.getElementById('authMessage').innerText = 'Credenciales incorrectas';
        }
    });

    function activateScript() {
        const button = document.querySelector('button.MuiButtonBase-root.MuiFab-root.MuiFab-circular.MuiFab-sizeSmall.MuiFab-primary');
        if (button) {
            button.click();  // Hace clic en el botón
            document.getElementById('statusMessage').innerText = 'El script está trabajando: el botón fue presionado.';
        } else {
            document.getElementById('statusMessage').innerText = 'No se pudo encontrar el botón.';
        }
    }

    function deactivateScript() {
        document.getElementById('statusMessage').innerText = 'El script está desactivado.';
    }

    document.querySelector("#activarBoton").addEventListener("click", activateScript);
    document.querySelector("#desactivarBoton").addEventListener("click", deactivateScript);
    