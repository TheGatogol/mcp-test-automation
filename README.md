# 🎭 Playwright + GitHub Copilot Framework

Framework de pruebas automatizadas que usa GitHub Copilot para generar tests con lenguaje natural.

## Prerrequisitos

- **Node.js 16+**
- **VS Code Insiders** con extensión **GitHub Copilot** (requiere suscripción)
  - Descarga: https://code.visualstudio.com/insiders/

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TheGatogol/mcp-test-automation.git
cd mcp-test-automation

# Instalar todo automáticamente (dependencias + navegadores)
npm run setup
```

## Crear Tests con Copilot

1. **Crea un archivo vacío** `tests/practicaTestQAcademy.spec.js`

2. **Copia y pega este texto en el archivo**:
```
Crea un archivo de Playwright llamado practicaTestQAcademy.spec.js que haga los siguientes pasos:
1. Importar test y expect de @playwright/test
2. Crear un test llamado "Login en TestQAcademy"
3. Navegar a https://practica.testqacademy.com/
4. Escribir "admin" en el campo con id qa-username-input
5. Escribir "123456" en el campo con id qa-password-input
6. Hacer click en el botón con id qa-login-button
7. Verificar que el login fue exitoso
Al terminar de generar el archivo:
Ejecuta el test que acabas de generar.
```

3. **Selecciona todo el texto** y presiona `Ctrl+I` para abrir Copilot Chat inline

4. **Copilot generará el código del test**

5. **Acepta el código y otorga permisos de escritura** y elimina el texto de instrucciones

5. **Ejecuta la prueba de manera manual**:
```bash
npx playwright test practicaTestQAcademy.spec.js --headed
```

## Ejecutar Tests

```bash
# Ejecutar todos los tests
npx playwright test

# Ejecutar un test específico
npx playwright test nombre.spec.ts

# Ver tests ejecutándose en navegador
npx playwright test --headed

# Modo debug paso a paso
npx playwright test --debug

# Abrir reporte HTML
npx playwright show-report

# Generar selectores (abre navegador interactivo)
npx playwright codegen https://practica.testqacademy.com/
```

## Estructura

```
├── tests/                 # Tus tests van aquí
├── test-results/          # Videos y traces (se genera automáticamente)
├── playwright-report/     # Reportes HTML (se genera automáticamente)
├── playwright.config.js   # Configuración
└── package.json
```

## Debugging

Si un test falla:

1. **Revisa el video** en `test-results/`
2. **Abre el trace**:
```bash
npx playwright show-trace test-results/[carpeta]/trace.zip
```

## Tips para Copilot

- Sé específico en los comentarios
- Usa los IDs exactos de los elementos (qa-username-input, qa-password-input, etc.)
- Numera los pasos del test
- Incluye verificaciones al final

---

## Desarrollador

**Jose Rodrigo Escutia Rios**  
📧 rodrigoingsis@gmail.com

---

¿Problemas? Revisa que:
- GitHub Copilot esté activo en VS Code Insiders
- Los selectores coincidan con la página real
- La página cargue correctamente