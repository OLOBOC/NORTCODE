# NORTCODE — Estudio Digital de Ingeniería Web

> **Desarrollo web profesional, digitalización de procesos y automatización con tecnología e inteligencia artificial. Sin humo ni rodeos.**

Sitio web oficial y plataforma digital de **NORTCODE**, desarrollado con arquitectura de alto rendimiento basada en **Next.js 15 (React 19)**, **Tailwind CSS**, endpoints seguros con **Resend** y cumplimiento estricto de las normativas europeas y españolas de protección de datos (**RGPD**, **LOPDGDD** y **LSSI-CE**).

---

## ⚡ Características Principales

1. **Dirección Visual de Estudio Técnico:**
   - Paleta sobria carbón y noche profunda (`#08090a`, `#0d0f12`, `#14171d`) con acentos tácticos en Cian (`#00f0ff`) y Azul Ingeniería (`#3b82f6`).
   - Isotipo minimalista y vector SVG de identidad NORTCODE.
   - Tipografía geométrica optimizada con *Plus Jakarta Sans* y *JetBrains Mono*.

2. **Interactividad Dinámica Avanzada:**
   - **Stack Inspector & Live Simulator (Hero):** Panel interactivo con simulador de payloads, latencia en vivo y visualización de capas de arquitectura.
   - **Need Matcher & Calculador de Proyecto:** Configurador en 4 pasos que genera un diagnóstico técnico instantáneo y transfiere automáticamente la necesidad al formulario de contacto sin recarga.
   - **Comparador Operativo Antes vs. Después (Pilar 02):** Visualización interactiva de la transición del caos de hojas de cálculo al orden digital centralizado.
   - **Diagrama de Flujo de Automatización & IA (Pilar 03):** Nodos interactivos con inspección en vivo de payloads, tiempos y beneficios.

3. **Portfolio Real & Demos en Vivo:**
   - **Audax Motors:** Web de automoción y catálogo vehicular en Next.js (`https://audax-motors.vercel.app/`).
   - **DFR Xtra Detail:** Landing de servicios de estética y detailing automotriz (`https://dfr-xtra-detail.vercel.app/#inicio`).
   - **Portfolio Personal / Laboratorio Frontend:** Muestra de algoritmos y componentes (`https://oloboc.github.io/`).

4. **Sistema de Contacto Blindado con Resend:**
   - Endpoint seguro `/api/contact` con validación estricta y sanitización anti-XSS.
   - Protección antispam mediante campo Honeypot invisible.
   - Envío directo al correo oficial: `oloboc.digitalbusiness@gmail.com`.
   - Modo de respaldo local simulado para pruebas previas a la adición de la API Key.
   - Estructura modular preparada para integrar enlace directo a WhatsApp.

5. **Cumplimiento Legal Íntegro (España / UE):**
   - Modales interactivos para **Aviso Legal (LSSI-CE)**, **Política de Privacidad (RGPD / LOPDGDD)** y **Política de Cookies**.
   - Banner de cookies accesible con almacenamiento de consentimiento en `localStorage`.
   - Sin cookies de rastreo publicitario invasivo de terceros.

---

## 🛠️ Estructura del Proyecto

```text
nortcode/
├── public/
│   ├── favicon.svg             # Isotipo oficial NORTCODE en formato SVG vectorial
│   └── robots.txt              # Reglas de indexación SEO
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js    # Endpoint seguro POST para procesar el formulario con Resend
│   │   ├── globals.css         # Estilos globales, gradientes radiales y cuadrícula técnica
│   │   ├── layout.js           # Metadatos SEO, OpenGraph, JSON-LD Schema y fuentes web
│   │   └── page.js             # Ensamblador de la página principal e interacciones de estado
│   ├── components/
│   │   ├── Header.jsx          # Navegación flotante con efecto blur y menú móvil responsive
│   │   ├── Hero.jsx            # Titular de impacto, garantías y llamadas a la acción
│   │   ├── StackInspector.jsx  # Widget interactivo simulador de arquitectura y flujos
│   │   ├── Services.jsx        # Los 3 pilares técnicos con mockups y métricas
│   │   ├── BeforeAfterComparator.jsx # Comparador visual de digitalización de procesos
│   │   ├── AutomationFlow.jsx  # Diagrama animado e interactivo de pipelines con IA
│   │   ├── NeedMatcher.jsx     # Configurador interactivo y calculador técnico
│   │   ├── Portfolio.jsx       # Galería asimétrica de proyectos reales publicados
│   │   ├── Methodology.jsx     # Las 4 fases de trabajo transparente
│   │   ├── About.jsx           # Perfil honesto (titulaciones DAW, DAM y especialización STI)
│   │   ├── ContactForm.jsx     # Formulario de alta conversión y seguridad
│   │   ├── LegalModals.jsx     # Textos legales adaptados a la normativa española y europea
│   │   ├── CookieBanner.jsx    # Aviso de cookies conforme a la AEPD
│   │   └── Footer.jsx          # Pie de página, accesos legales y copyright
│   └── lib/
│       └── sanitize.js         # Sanitización estricta contra ataques XSS y validaciones
├── .env.example                # Plantilla de variables de entorno
├── .env.local                  # Variables de entorno locales (ignorado en Git)
├── jsconfig.json               # Alias de rutas (@/* -> ./src/*)
├── next.config.js              # Configuración de producción de Next.js
├── package.json                # Scripts y dependencias
└── tailwind.config.js          # Sistema de diseño, colores y utilidades Tailwind
```

---

## 🚀 Puesta en Marcha Local

### 1. Clonar o acceder a la carpeta
```bash
cd nortcode
```

### 2. Ejecutar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### 3. Compilar para producción
```bash
npm run build
npm run start
```

---

## 📧 Configuración del Correo Transaccional (Resend)

El formulario de contacto está conectado al endpoint seguro `/api/contact` y programado para enviar cada solicitud directamente a **`oloboc.digitalbusiness@gmail.com`**.

1. Crea una cuenta gratuita en [https://resend.com/](https://resend.com/).
2. Dirígete a **API Keys** y genera una clave nueva con permisos de envío.
3. Abre el archivo `.env.local` en la raíz del proyecto y añade tu clave:
   ```env
   RESEND_API_KEY=re_123456789_tu_clave_real_aqui
   EMAIL_FROM="Nortcode Web <onboarding@resend.dev>"
   EMAIL_TO="oloboc.digitalbusiness@gmail.com"
   ```
4. Reinicia el servidor local (`npm run dev` o `npm run start`).
5. Realiza un envío desde el formulario web y comprueba la bandeja de entrada de `oloboc.digitalbusiness@gmail.com`.

*(Nota: Mientras no configures la clave, el sistema entra en modo de simulación segura en consola sin arrojar errores 500, permitiendo probar la navegación y el frontend sin interrupciones).*

---

## 🌐 Despliegue en Producción (Vercel)

El repositorio ya está en GitHub. Vercel desplegará automáticamente cada cambio que llegue a la rama `main`.

1. Entra en [https://vercel.com/](https://vercel.com/) con tu cuenta de GitHub.
2. Selecciona **Add New...** → **Project** e importa `OLOBOC/NORTCODE`.
3. En **Environment Variables**, configura para **Production**:
   - `RESEND_API_KEY`: una clave de API de Resend.
   - `EMAIL_TO`: `oloboc.digitalbusiness@gmail.com`
   - `EMAIL_FROM`: un remitente autorizado por Resend. Para producción, verifica el dominio de envío en Resend y usa una dirección de ese dominio.
4. Pulsa **Deploy** y espera a que Vercel indique que el despliegue ha terminado correctamente.
5. En el proyecto de Vercel, abre **Settings** → **Domains** y añade `nortcode.es` y `www.nortcode.es`. Deja `nortcode.es` como dominio principal.
6. En DonDominio, abre la gestión DNS de `nortcode.es` y crea o actualiza los registros que Vercel muestre para ambos dominios. Habitualmente son un registro **A** para `@` y un **CNAME** para `www`; usa los valores exactos que indique Vercel. No elimines otros registros DNS que uses para correo.
7. Espera a que Vercel valide el DNS y active el certificado HTTPS. Después, comprueba `https://nortcode.es`, `https://www.nortcode.es`, `/sitemap.xml` y el formulario de contacto.

Para publicar cambios futuros, haz `git push origin main`; Vercel iniciará un nuevo despliegue automáticamente. No subas `.env.local` ni claves al repositorio: añade los secretos desde **Settings** → **Environment Variables** en Vercel.

---

## ⚖️ Marcadores Legales Pendientes `[COMPLETAR]`

Antes de lanzar el dominio comercial definitivo a clientes finales, abre el archivo `src/components/LegalModals.jsx` y rellena los siguientes marcadores con tus datos fiscales de autónomo o empresa:

- `[COMPLETAR: Nombre y Apellidos / Razón Social del Titular]`
- `[COMPLETAR: NIF o CIF Fiscal]`
- `[COMPLETAR: Dirección postal completa, Código Postal, Ciudad, España]`
- `[COMPLETAR: Ciudad de Jurisdicción, ej. Oviedo / Madrid]`

---

© 2026 **NORTCODE** — Estudio Digital de Ingeniería & Software.
