from playwright.sync_api import sync_playwright
import os
import time

# Variables de entorno
URL = os.getenv("PAGE_URL", "https://conexen.services/provider/services/top-up-provider/available")
USERNAME = os.getenv("USERNAME", "jorgeleandrom050@gmail.com")
PASSWORD = os.getenv("PASSWORD", "leandroabdiel**@")

def monitor_recargas():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Accede a la página
        page.goto(URL)
        
        # Inicia sesión
        page.fill('input[name="username"]', USERNAME)
        page.fill('input[name="password"]', PASSWORD)
        page.click('button[type="submit"]')
        
        time.sleep(3)  # Espera a que cargue la página después del login
        
        recargas_vistas = set()  # Para evitar duplicados

        while True:
            page.reload()  # Refresca la página
            time.sleep(3)  # Espera que cargue

            # Captura las recargas (ajusta el selector según la web)
            recargas = page.query_selector_all('.recarga-item')
            for recarga in recargas:
                texto = recarga.inner_text()
                if texto not in recargas_vistas:
                    print("Nueva recarga detectada:", texto)
                    recargas_vistas.add(texto)
            
            time.sleep(10)  # Espera antes del próximo chequeo

        browser.close()

if _name_ == "_main_":
    monitor_recargas()
