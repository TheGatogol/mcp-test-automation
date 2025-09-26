import { test, expect } from '@playwright/test';

test('testqacademy', async ({ page }) => {
  // Abrir la URL
  await page.goto('https://practica.testqacademy.com/');

  // Localizar el campo de usuario e ingresar el texto "admin"
  await page.fill('input[name="username"]', 'admin');

  // Localizar el campo de contraseña e ingresar el texto "123456"
  await page.fill('input[name="password"]', '123456');

  // Hacer clic en el botón Mostrar (que revela la contraseña)
  await page.click('button#show-password');

  // Seleccionar el checkbox Recordarme
  await page.check('input[name="remember"]');

  // Hacer clic en el botón Iniciar sesión
  await page.click('button#login');

  // Verificar que el login fue exitoso
  const successMessage = await page.locator('text=Login exitoso');
  await expect(successMessage).toBeVisible();
});