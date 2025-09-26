#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🎭 Instalando dependencias...\n');

// Instalar dependencias de package.json
execSync('npm install', { stdio: 'inherit' });

// Instalar navegadores de Playwright
execSync('npx playwright install', { stdio: 'inherit' });

console.log('✅ Listo! Ejecuta: npm test');