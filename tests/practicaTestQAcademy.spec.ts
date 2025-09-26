import { test, expect } from '@playwright/test';

test('practicaTestQAcademy', async ({ page }) => {
  // Abrir la URL
  await page.goto('https://practica.testqacademy.com/');

  // Localizar el campo de usuario e ingresar el texto "admin"
  const usernameField = await page.locator('input[name="username"]');
  await usernameField.fill('admin');

  // Localizar el campo de contraseña e ingresar el texto "123456"
  const passwordField = await page.locator('input[name="password"]');
  await passwordField.fill('123456');

  // Hacer clic en el botón Mostrar (que revela la contraseña)
  const showPasswordButton = await page.locator('button#show-password');
  await showPasswordButton.click();

  // Seleccionar el checkbox Recordarme
  const rememberMeCheckbox = await page.locator('input[name="remember"]');
  await rememberMeCheckbox.check();

  // Hacer clic en el botón Iniciar sesión
  const loginButton = await page.locator('button#login');
  await loginButton.click();

  // Verificar que el login fue exitoso
  const successMessage = await page.locator('text=Login exitoso');
  await expect(successMessage).toBeVisible();
});