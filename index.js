const puppeteer = require('puppeteer');

(async () => {
  try {
    // Inicia el navegador
    const browser = await puppeteer.launch({
      headless: true, // Modo sin interfaz gráfica
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Necesario para Koyeb
    });
    const page = await browser.newPage();

    // Navega a la página web
    await page.goto('https://https://conexen.services/provider/services/top-up-provider/available');

    // Espera a que el elemento esté disponible y haz clic
    await page.waitForSelector('selector-del-elemento');
    await page.click('selector-del-elemento');

    console.log('¡Clic realizado con éxito!');

    // Cierra el navegador
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
