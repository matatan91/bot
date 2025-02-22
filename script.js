function authenticateAndActivateScript() {
    const url = "https://conexen.services/provider/services/top-up-provider/available";
    
    // Paso 1: Autenticarse automáticamente
    const username = "jorgeleandrom050@gmail.com";
    const password = "leandroabdiel**@";
    
    // Intentamos acceder a la página de login e insertar las credenciales
    console.log('Intentando autenticarse...');
    
    const loginUrl = "https://conexen.services/login"; // Asegúrate de que esta sea la URL correcta de inicio de sesión

    // Verificamos si estamos en la página de login
    if (window.location.href === loginUrl) {
        // Rellenar los campos de usuario y contraseña
        document.querySelector('input[name="email"]').value = username;  // Asumiendo que el campo de usuario tiene el atributo 'name="email"'
        document.querySelector('input[name="password"]').value = password;  // As
