from playwright.sync_api import sync_playwright
import time

URL = "https://conexen.services/provider/services/top-up-provider/available"
USERNAME = "jorgeleandrom050@gmail.com"
PASSWORD = "leandroabdiel**@"

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
        
        recargas_vistas = set()

        # Monitoreo por 10 minutos
        for _ in range(10):
            page.reload()
            time.sleep(3)

            recargas = page.query_selector_all('.recarga-item')
            for recarga in recargas:
                texto = recarga.inner_text()
                if texto not in recargas_vistas:
                    print("Nueva recarga detectada:", texto)
                    recargas_vistas.add(texto)
            
            time.sleep(60)  # Espera 1 minuto antes de recargar

        browser.close()

if _name_ == "_main_":
    monitor_recargas()
