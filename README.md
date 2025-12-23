# Bitfinanzas - Reporte Q4 2025

Reporte interactivo de analíticas de Bitfinanzas.com para Octubre, Noviembre y Diciembre 2025.

## 🚀 Publicar en GitHub Pages

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `bitfinanzas-report`
3. Hazlo público
4. **No** inicialices con README
5. Click en "Create repository"

### Paso 2: Subir el código
Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Instalar dependencias
npm install

# Inicializar git
git init
git add .
git commit -m "Initial commit - Reporte Q4 2025"

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/bitfinanzas-report.git
git branch -M main
git push -u origin main
```

### Paso 3: Hacer deploy a GitHub Pages

```bash
# Construir y publicar
npm run build
npm run deploy
```

### Paso 4: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: selecciona `gh-pages` branch
4. Click en Save

### ✅ ¡Listo!
Tu reporte estará disponible en:
`https://TU_USUARIO.github.io/bitfinanzas-report/`

---

## 💻 Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## 📊 Contenido del reporte

- **Resumen Ejecutivo**: KPIs principales y alertas
- **Análisis Mensual**: Comparación Sep-Oct-Nov-Dic
- **Análisis Semanal**: Tendencias por semana
- **Top Páginas**: Contenido más visitado y fuentes de tráfico
- **Comparación Anual**: 2024 vs 2025 (YoY)

## 🛠 Tecnologías

- React 18
- Vite
- Tailwind CSS
- Recharts
- Lucide Icons
