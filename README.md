<p align="center">
  <img src="https://www.unanleon.edu.ni/wp-content/uploads/2025/09/FLATICON-MARCA-UNANA-ZUL.png" alt="UNAN León" width="100" />
</p>

<h1 align="center">Universidad Nacional Autónoma de Nicaragua, León<br>
CUR Somoto<br>
Ingeniería en Sistemas — III Año<br>
Proyecto: TreeForLife</h1>

<p align="center">
  <strong>Plataforma Web para la Reforestación Comunitaria en Dipilto y San José de Cusmapa</strong>
</p>

<p align="center">
  <strong>Integrantes:</strong> Equipo de desarrollo — TreeForLife<br>
  <strong>Asignatura:</strong> Programación Web / Proyecto Integrador<br>
  <strong>Año Académico:</strong> 2026<br>
  <strong>Versión:</strong> 1.0.0
</p>

---

# TreeForLife — Restaurando los Bosques de Nicaragua

## Resumen

TreeForLife es una plataforma web de una sola página (SPA) desarrollada como proyecto académico por estudiantes de III año de Ingeniería en Sistemas del CUR Somoto (UNAN León). La plataforma tiene como objetivo visibilizar y apoyar los esfuerzos de reforestación comunitaria en dos municipios del norte de Nicaragua: Dipilto (Nueva Segovia) y San José de Cusmapa (Madriz). A través de un sitio web funcional, se integran módulos de donaciones, mapas interactivos con datos georreferenciados de incendios y talas, galería fotográfica, tienda solidaria y sección de transparencia financiera. El proyecto se construyó con tecnologías web estándar (HTML5, CSS3, JavaScript vanilla) y bibliotecas open source como Leaflet.js, GSAP y AOS, demostrando la aplicación práctica de los conocimientos adquiridos en el plan de estudios de la carrera.

---

## 1. Introducción

Nicaragua enfrenta una crisis de deforestación que ha reducido significativamente su cobertura forestal en las últimas décadas. Según datos del Ministerio del Ambiente y los Recursos Naturales (MARENA), la tasa de deforestación en el país afecta especialmente a las regiones de Nueva Segovia y Madriz, donde la tala ilegal, los incendios forestales y la expansión de la frontera agrícola han degradado extensas áreas de bosque nativo.

Los municipios de Dipilto (Nueva Segovia) y San José de Cusmapa (Madriz) son dos comunidades especialmente afectadas. Dipilto, ubicado a 1,037 m s. n. m., presenta problemas de erosión del suelo y pérdida de cobertura forestal. San José de Cusmapa, el municipio más elevado de Nicaragua con 1,288 m s. n. m., enfrenta desafíos en la protección de sus cuencas hídricas, vitales para el abastecimiento de agua en la región.

En este contexto, el proyecto TreeForLife nace como una iniciativa académica que utiliza herramientas de desarrollo web para crear conciencia, recaudar fondos y monitorear los esfuerzos de reforestación en estas comunidades. La plataforma web permite a cualquier persona con acceso a internet conocer la situación actual de los bosques, realizar donaciones, explorar mapas interactivos con datos de incendios y talas, y adquirir productos solidarios, todo con total transparencia financiera.

---

## 2. Planteamiento del Problema

### 2.1 Descripción del Problema

La deforestación en el norte de Nicaragua ha alcanzado niveles críticos. Los bosques de pino, roble y especies nativas que alguna vez cubrieron extensas áreas de Nueva Segovia y Madriz han sido diezmados por:

- **Incendios forestales:** Cada año, durante la temporada seca (enero a mayo), se registran incendios que consumen cientos de hectáreas de bosque. En 2026, se han documentado al menos 4 incendios significativos en las zonas de Dipilto y Cusmapa, afectando más de 120 hectáreas.
- **Tala ilegal:** La extracción no autorizada de madera para construcción, leña y comercio ilegal ha provocado la pérdida de miles de árboles. Se han detectado más de 18 puntos de tala ilegal en la región.
- **Expansión agrícola:** El avance de la frontera agrícola para cultivos y pastoreo ha fragmentado los bosques nativos, reduciendo la conectividad ecológica y afectando la biodiversidad.

### 2.2 Consecuencias

- Erosión acelerada del suelo fértil
- Reducción de la capacidad de retención de agua en las cuencas hídricas
- Pérdida de hábitat para especies nativas
- Disminución de la calidad del aire
- Impacto negativo en el sustento de las comunidades rurales que dependen del bosque

### 2.3 Pregunta de Investigación

¿Cómo puede una plataforma web contribuir a la concienciación, el monitoreo y la recaudación de fondos para la reforestación comunitaria en los municipios de Dipilto y San José de Cusmapa?

---

## 3. Justificación

### 3.1 Justificación Académica

El presente proyecto permite a los estudiantes de Ingeniería en Sistemas aplicar los conocimientos teóricos y prácticos adquiridos en el aula en un contexto real. Se integran conceptos de:

- **Desarrollo web frontend:** HTML5 semántico, CSS3 con diseño responsive, JavaScript para lógica del lado del cliente
- **Interacción con APIs y bibliotecas externas:** Leaflet.js para mapas, GSAP para animaciones, AOS para scroll reveal
- **Persistencia de datos en el navegador:** Uso de localStorage para donaciones, carrito de compras y preferencias de tema
- **Diseño de experiencia de usuario (UX/UI):** Arquitectura de información, jerarquía visual, accesibilidad y usabilidad
- **Trabajo colaborativo:** Uso de Git y GitHub para control de versiones

### 3.2 Justificación Social

TreeForLife aborda un problema real que afecta a comunidades nicaragüenses. La plataforma sirve como herramienta de:

- **Concienciación ambiental:** Presenta datos concretos sobre incendios, talas y áreas reforestadas
- **Recaudación de fondos:** Permite donaciones directas con total transparencia del uso de los recursos
- **Visibilidad:** Da a conocer la situación de comunidades rurales que enfrentan la deforestación
- **Participación ciudadana:** Cualquier persona puede contribuir desde cualquier lugar

### 3.3 Justificación Tecnológica

Se optó por una arquitectura de aplicación web de una sola página (SPA) sin frameworks ni dependencias pesadas por las siguientes razones:

- **Rendimiento:** Carga rápida y navegación fluida sin recarga de página
- **Accesibilidad:** Funciona en cualquier navegador moderno sin necesidad de instalación
- **Mantenibilidad:** Código modular y bien estructurado, fácil de mantener y extender
- **Costo cero:** Tecnologías open source sin licencias de software
- **Educativo:** Demuestra comprensión profunda de JavaScript vanilla sin abstracciones de frameworks

---

## 4. Objetivos

### 4.1 Objetivo General

Desarrollar una plataforma web funcional que integre herramientas de visualización de datos geoespaciales, recaudación de donaciones, comercio solidario y transparencia financiera para apoyar los esfuerzos de reforestación comunitaria en los municipios de Dipilto (Nueva Segovia) y San José de Cusmapa (Madriz), Nicaragua.

### 4.2 Objetivos Específicos

1. Diseñar e implementar una interfaz de usuario responsiva y accesible que presente la información del proyecto de manera clara y atractiva, utilizando HTML5, CSS3 y principios de diseño UX/UI.

2. Desarrollar un sistema de mapas interactivos basado en Leaflet.js que permita visualizar datos georreferenciados de incendios forestales, talas ilegales, zonas reforestadas y áreas protegidas en las dos comunidades objetivo.

3. Implementar un módulo de donaciones con barra de progreso animada, persistencia de datos en localStorage y retroalimentación visual/auditiva que motive la participación de los usuarios.

4. Construir una tienda solidaria con carrito de compras que permita adquirir productos promocionales cuyas ganancias se destinen íntegramente a la reforestación.

5. Integrar una sección de transparencia financiera que muestre el desglose porcentual del uso de fondos, certificaciones y un cronograma de inversión.

6. Incorporar animaciones profesionales (GSAP, AOS) y un modo oscuro que mejoren la experiencia de navegación del usuario.

---

## 5. Marco Teórico

### 5.1 Reforestación y Restauración Ecológica

La reforestación es el proceso de plantar árboles en áreas que han perdido su cobertura forestal debido a la deforestación, incendios u otras causas. En Nicaragua, la reforestación comunitaria ha demostrado ser una estrategia efectiva para restaurar ecosistemas, proteger cuencas hídricas y generar empleos locales. Las especies nativas utilizadas en la región incluyen Guanacaste (Enterolobium cyclocarpum), Caoba (Swietenia humilis), Pino (Pinus oocarpa), Laurel (Cordia alliodora) y Madroño (Arbutus xalapensis).

### 5.2 Sistemas de Información Geográfica (SIG)

Los SIG permiten capturar, almacenar, analizar y visualizar datos geoespaciales. En el contexto de la reforestación, los SIG son herramientas fundamentales para:

- Mapear áreas degradadas y priorizar zonas de intervención
- Monitorear la recuperación de la cobertura forestal
- Identificar puntos críticos de incendios y talas ilegales
- Planificar rutas de plantación y acceso

Leaflet.js es una biblioteca JavaScript open source liviana (aprox. 40 KB) que permite incrustar mapas interactivos en páginas web sin dependencias pesadas. Utiliza proyección Web Mercator (EPSG:3857) y se integra con servicios de teselas como OpenStreetMap.

### 5.3 Desarrollo Web Frontend

#### HTML5
HTML5 proporciona la estructura semántica de la aplicación. El uso de etiquetas como `<header>`, `<section>`, `<nav>`, `<footer>` mejora la accesibilidad y el SEO. El atributo `data-*` permite almacenar información personalizada en los elementos HTML, utilizada extensivamente en este proyecto para configuraciones de animación y estado.

#### CSS3
CSS3 se utiliza para el diseño visual completo del proyecto. Las características clave implementadas incluyen:

- **CSS Custom Properties (variables):** Definición de una paleta de colores coherente con 10 variables que se sobreescriben en el modo oscuro
- **Flexbox y CSS Grid:** Layouts responsivos que se adaptan a diferentes tamaños de pantalla
- **Animaciones CSS:** Gradientes animados (hero), partículas flotantes (hojas), barras de progreso (shimmer), confeti
- **Media Queries:** 3 puntos de ruptura (1024px, 768px, 480px) para adaptación a tablet y móvil
- **Glassmorphism:** Efecto de vidrio con `backdrop-filter: blur()` en tarjetas y navegación
- **Transiciones:** Transición suave en todos los elementos interactivos mediante `cubic-bezier()`

#### JavaScript (Vanilla)
JavaScript se utiliza para toda la lógica de la aplicación sin frameworks. Las características implementadas incluyen:

- **Manipulación del DOM:** Creación dinámica de elementos, actualización de contenido, gestión de eventos
- **Web Storage API:** Persistencia de datos de donaciones, carrito de compras y preferencia de tema en localStorage
- **Web Audio API:** Generación de tonos de retroalimentación auditiva para donaciones
- **Intersection Observer API:** Detección de visibilidad de elementos para activar contadores animados
- **RequestAnimationFrame:** Animaciones fluidas de contadores numéricos

### 5.4 Animaciones Web

#### GSAP (GreenSock Animation Platform)
GSAP es una biblioteca JavaScript de animación de alto rendimiento. En este proyecto se utiliza para:

- Animación secuencial del hero (título, subtítulo, CTA, estadísticas)
- ScrollTrigger para animar barras de progreso cuando entran en el viewport

#### AOS (Animate On Scroll)
AOS proporciona animaciones basadas en scroll con configuración simple mediante atributos `data-aos`. Se utiliza para el reveal gradual de secciones y tarjetas a lo largo de la página.

### 5.5 Diseño Responsive

El diseño responsive es un enfoque de desarrollo web que permite que una misma página se visualice correctamente en dispositivos de diferentes tamaños. Se implementa mediante:

- Sistema de rejilla flexible (CSS Grid y Flexbox)
- Unidades relativas (%, em, rem)
- Media queries para ajustes específicos por resolución
- Meta viewport para control de escala en móviles

### 5.6 Persistencia del Estado

El proyecto utiliza localStorage del navegador para persistir tres tipos de datos:

- **totalDonated:** Monto acumulado de donaciones
- **cart:** Array JSON con productos seleccionados y cantidades
- **theme:** Preferencia de tema claro u oscuro

Esta información permanece disponible entre sesiones de navegación sin necesidad de una base de datos en servidor.

---

## 6. Marco Legal

El proyecto TreeForLife se enmarca en la legislación ambiental nicaragüense vigente:

- **Ley 217 — Ley General del Medio Ambiente y los Recursos Naturales:** Establece los principios y normas para la conservación del ambiente y los recursos naturales en Nicaragua.
- **Ley 462 — Ley de Conservación y Utilización Sostenible de la Diversidad Biológica:** Regula la protección de los ecosistemas y especies nativas.
- **Ley 585 — Ley de Prohibición de la Tala Ilegal:** Establece sanciones para la extracción no autorizada de madera.
- **Decreto 01-2007:** Reglamento de la Ley de Prohibición de la Tala Ilegal.
- **MARENA:** Ministerio del Ambiente y los Recursos Naturales, ente rector de la política ambiental nacional.

Las coordenadas de las zonas de operación (Dipilto: 13.7167, -86.5000; Cusmapa: 13.2880, -86.6544) corresponden a áreas legalmente registradas para proyectos de reforestación comunitaria.

---

## 7. Metodología

### 7.1 Enfoque Metodológico

El proyecto se desarrolló siguiendo un enfoque iterativo e incremental, combinando principios de desarrollo ágil con entregables definidos. Las fases del proyecto fueron:

### 7.2 Fases del Desarrollo

#### Fase 1: Planificación y Análisis de Requerimientos
- Identificación de los municipios objetivo y recopilación de datos geoespaciales
- Definición de la arquitectura del sitio (SPA con secciones modulares)
- Selección de tecnologías y bibliotecas
- Establecimiento de metas realistas de reforestación (10,000 árboles como objetivo general)

#### Fase 2: Diseño de Interfaz
- Creación de la paleta de colores basada en tonos verdes forestales
- Diseño del sistema de componentes (botones, tarjetas, barras, tabs)
- Planificación del flujo de navegación y jerarquía de la información
- Definición de la experiencia de usuario para donaciones y compras

#### Fase 3: Desarrollo Frontend
- **HTML:** Estructura semántica con 10 secciones principales
- **CSS:** Sistema de diseño completo con variables, animaciones y 3 breakpoints responsive
- **JavaScript:** 13 módulos funcionales (navegación, hero, donaciones, mapa, galería, tienda, carrito, equipo, transparencia, tema oscuro, animaciones, notificaciones, confeti)

#### Fase 4: Integración de Bibliotecas Externas
- Leaflet.js para mapas interactivos (3 vistas, 5 tipos de marcadores)
- GSAP + ScrollTrigger para animaciones profesionales
- AOS para scroll reveal
- Font Awesome para iconografía

#### Fase 5: Pruebas y Validación
- Pruebas de funcionalidad en navegadores modernos (Chrome, Firefox, Edge)
- Verificación de persistencia de datos en localStorage
- Pruebas de responsive en múltiples tamaños de pantalla
- Validación de enlaces y navegación entre secciones

### 7.3 Herramientas Utilizadas

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| Visual Studio Code | Última estable | Editor de código |
| Git | 2.x | Control de versiones |
| GitHub | — | Repositorio remoto y colaboración |
| Google Chrome DevTools | Última | Depuración y pruebas responsive |
| Leaflet.js | 1.9.4 | Mapas interactivos |
| GSAP | 3.12.5 | Animaciones profesionales |
| AOS | 2.3.1 | Animaciones al scroll |
| Font Awesome | 6.4.0 | Iconografía |
| OpenStreetMap | — | Capa base de mapas |
| Esri World Imagery | — | Capa satelital |

---

## 8. Análisis de Requerimientos

### 8.1 Requerimientos Funcionales

| ID | Requerimiento | Módulo | Prioridad |
|----|---------------|--------|-----------|
| RF01 | El sitio debe mostrar una página principal con información del proyecto | General | Alta |
| RF02 | El sitio debe tener un menú de navegación fijo con enlaces a todas las secciones | Navegación | Alta |
| RF03 | El sitio debe mostrar estadísticas animadas en el hero (árboles, hectáreas, empleos, familias) | Hero | Alta |
| RF04 | El usuario debe poder realizar donaciones mediante montos predefinidos o personalizados | Donaciones | Alta |
| RF05 | El sistema debe mostrar el progreso hacia la meta de árboles plantados | Donaciones | Alta |
| RF06 | El sistema debe persistir el total de donaciones en el navegador | Donaciones | Alta |
| RF07 | El usuario debe poder explorar mapas interactivos con datos de incendios, talas y siembras | Mapas | Alta |
| RF08 | El mapa debe permitir alternar entre vista real y simulación de riesgos | Mapas | Alta |
| RF09 | El mapa debe tener filtros para mostrar/ocultar capas de datos | Mapas | Alta |
| RF10 | El usuario debe poder ver una galería de imágenes filtrable por categorías | Galería | Alta |
| RF11 | La galería debe tener un lightbox para visualización ampliada | Galería | Media |
| RF12 | El usuario debe poder comprar productos de la tienda solidaria | Tienda | Alta |
| RF13 | El sistema debe tener un carrito de compras persistente | Tienda | Alta |
| RF14 | El checkout debe sumar el total al fondo de donaciones | Tienda | Media |
| RF15 | El usuario debe poder alternar entre modo claro y modo oscuro | General | Media |
| RF16 | El sitio debe tener animaciones al hacer scroll | General | Media |
| RF17 | El sitio debe tener una sección de transparencia financiera | Transparencia | Alta |
| RF18 | El sitio debe mostrar notificaciones toast para acciones del usuario | General | Media |
| RF19 | El sistema debe reproducir un sonido de éxito al donar | Donaciones | Baja |
| RF20 | El sistema debe mostrar confeti al alcanzar la meta de donaciones | Donaciones | Baja |

### 8.2 Requerimientos No Funcionales

| ID | Requerimiento | Descripción |
|----|---------------|-------------|
| RNF01 | Usabilidad | La interfaz debe ser intuitiva y fácil de navegar |
| RNF02 | Rendimiento | El sitio debe cargar en menos de 3 segundos en conexiones estándar |
| RNF03 | Responsive | El sitio debe funcionar correctamente en móvil, tablet y escritorio |
| RNF04 | Accesibilidad | Los elementos deben tener etiquetas aria y contraste adecuado |
| RNF05 | Compatibilidad | El sitio debe funcionar en Chrome, Firefox y Edge (últimas 2 versiones) |
| RNF06 | Persistencia | Los datos de donaciones, carrito y tema deben mantenerse entre sesiones |
| RNF07 | Mantenibilidad | El código debe estar modularizado y comentado |

---

## 9. Arquitectura del Sistema

### 9.1 Arquitectura General

TreeForLife es una aplicación web de una sola página (SPA) con arquitectura frontend pura. No requiere servidor backend ni base de datos externa. La arquitectura sigue el patrón de módulos JavaScript donde cada funcionalidad se encapsula en una función independiente.

### 9.2 Flujo de Datos

```
Usuario → Interfaz HTML/CSS → JavaScript (eventos) → 
  ├── Leaflet.js (mapas)
  ├── GSAP/AOS (animaciones)
  ├── Web Storage API (persistencia)
  ├── Web Audio API (sonido)
  └── DOM API (actualización de interfaz)
```

### 9.3 Estructura de Archivos

```
arboles/
├── index.html          # Página principal (single page)
├── styles.css          # Sistema de diseño completo
├── script.js           # Lógica principal de la aplicación
├── map.html            # Página de mapa independiente
├── map-script.js       # Lógica del mapa independiente
├── map-styles.css      # Estilos del mapa independiente
└── README.md           # Documentación del proyecto
```

### 9.4 Módulos de JavaScript

| Módulo | Archivo | Función Principal |
|--------|---------|-------------------|
| Navegación | script.js | Menú hamburguesa, scroll detection |
| Scroll Progress | script.js | Barra de progreso superior |
| Hero | script.js | Animación secuencial, contadores |
| Donaciones | script.js | Lógica de donaciones, progreso, confeti |
| Mapas | script.js + map-script.js | Mapas Leaflet con 3 ubicaciones |
| Galería | script.js | Filtros, renderizado, lightbox |
| Tienda | script.js | Productos, carrito, checkout |
| Equipo | script.js | Renderizado del equipo |
| Transparencia | script.js | Fondos, certificaciones, timeline |
| Tema Oscuro | script.js | Toggle, localStorage, iconos |
| Animaciones | script.js | AOS, GSAP, ScrollTrigger |
| Notificaciones | script.js | Sistema de toasts |

---

## 10. Diseño de Interfaz

### 10.1 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Verde oscuro | `#1b4332` | Títulos, fondo del header, footer |
| Verde medio | `#2d6a4f` | Elementos secundarios |
| Verde claro | `#40916c` | Bordes, acentos secundarios |
| Verde brillante | `#52b788` | Botones, enlaces, acentos principales |
| Verde pastel | `#74c69d` | Fondos de badge, brillos |
| Fondo claro | `#e8f5e9` | Secciones alternadas |
| Fondo blanco | `#ffffff` | Fondo principal |

### 10.2 Tipografía

- **Principal:** Sistema nativo de fuentes: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif`
- **Tamaños:** 0.82em (badges), 0.9em (nav), 1em (cuerpo), 1.3em (subtítulos), 1.4em (títulos de sección), 2.5em (títulos grandes), 4em (hero)

### 10.3 Componentes de Interfaz

| Componente | Estilo |
|------------|--------|
| Botones | Border-radius 50px, gradiente verde, sombra, hover con translateY |
| Tarjetas | Border-radius 16px, sombra suave, transición en hover |
| Barras de progreso | Gradiente animado con efecto shimmer |
| Navegación | Fija con backdrop-filter blur, cambia de opacidad al scrollear |
| Mapas | Border-radius 16px, leyenda superpuesta bottom-right |
| Galería | Grid auto-fill, hover con overlay y escala |
| Lightbox | Overlay fullscreen con blur, navegación por teclado |
| Carrito | Sidebar derecha 400px, overlay con blur, slide-in animado |

### 10.4 Responsive Design

El diseño se adapta a 3 rangos de dispositivos:

- **Escritorio (>1024px):** Diseño completo con todas las columnas
- **Tablet (768px-1024px):** Rejillas reducidas, navegación colapsable
- **Móvil (<768px):** Una columna, navegación hamburguesa, contenedores apilados

---

## 11. Desarrollo del Proyecto

### 11.1 Estructura de la Página Principal

La página principal (index.html) contiene las siguientes secciones, en orden:

#### Hero
- Gradiente animado de fondo con 4 colores que se desplazan en 12 segundos
- 5 hojas flotantes con animación CSS (translateY + rotate + scale)
- Patrón de puntos superpuesto con `radial-gradient`
- Título, subtítulo con tagline, 2 botones CTA (Donar y Explorar)
- 4 contadores animados (1,250 árboles, 28 hectáreas, 8 empleos, 95 familias)

#### Donaciones
- Tarjeta de progreso con barra animada (meta: 10,000 árboles)
- 6 botones de donación rápida ($5, $10, $25, $50, $100, Otro)
- Campo de entrada personalizada con prefijo $
- 4 tarjetas de impacto visual

#### Acerca de
- 3 tarjetas: Misión, Visión y Valores
- 2 tarjetas de ubicaciones (Dipilto y San José de Cusmapa)
- Listas con objetivos realistas

#### Mapas Interactivos
- 3 pestañas de ubicaciones (Dipilto, Cusmapa, Zonas Sembradas)
- Toggle de modo real/simulado
- 3 filtros de capas (Incendios, Talas, Sembradas)
- Mapa Leaflet con 5 tipos de marcadores personalizados
- Leyenda con 6 categorías
- 4 estadísticas del mapa

#### Galería
- 6 filtros por categoría
- 12 imágenes con lightbox
- Navegación por teclado (flechas, Escape)

#### Tienda
- 6 productos con precios entre $3 y $12
- Carrito lateral con persistencia en localStorage
- Checkout que suma al fondo de donaciones

#### Equipo
- 6 miembros con roles, avatar y formación

#### Transparencia
- Desglose de fondos (45% plantación, 25% terrenos, 15% capacitación, 10% administración, 5% monitoreo)
- Certificaciones (MARENA, ONG, Auditoría, Carbono, ISO 14001, Transparencia)
- Estado financiero: $4,580 recaudados, $3,620 utilizados, $960 disponibles
- Cronograma de inversión en 4 fases

### 11.2 Sistema de Mapas Interactivos

El módulo de mapas utiliza Leaflet.js con las siguientes características:

- **3 vistas:** Dipilto (13.7167, -86.5000), Cusmapa (13.2880, -86.6544), Zonas Sembradas (13.502, -86.577)
- **5 tipos de marcadores:** Incendios (según severidad), Talas (según severidad), Siembras, Áreas Protegidas, Riesgo Potencial
- **Marcadores personalizados:** L.divIcon con emoji y círculo de color
- **Capas de datos:** 4 feature groups (incendios, talas, siembras, protegidas) + 1 de riesgo
- **Capa satelital:** Integración con Esri World Imagery
- **Filtros:** Checkbox que muestran/ocultan capas en tiempo real

### 11.3 Sistema de Donaciones

- Persistencia en localStorage (clave: `totalDonated`)
- Regla: $1 USD = 1 árbol plantado
- Meta general: 10,000 árboles
- Barra de progreso con efecto shimmer
- Contador animado de donantes
- Notificación toast al donar
- Sonido de éxito (Web Audio API — 800Hz sine wave, 150ms)
- Confeti al alcanzar la meta (200 partículas con colores aleatorios)

### 11.4 Modo Oscuro

El modo oscuro se implementa mediante:

- **HTML:** Atributo `data-theme="light"` en `<html>`
- **CSS:** Bloque `[data-theme="dark"]` que sobrescribe las 10 variables de color y 15+ componentes específicos
- **JavaScript:** Función `initThemeToggle()` que alterna el atributo y persiste en localStorage (clave: `theme`)
- **Transición:** CSS `transition` en `html` y `body` para cambio suave de colores

### 11.5 Animaciones

| Animación | Tecnología | Detalle |
|-----------|------------|---------|
| Gradiente del hero | CSS | `background-position` animation, 12s cycle |
| Hojas flotantes | CSS | 5 elementos con diferentes delays y duraciones |
| Revelación del hero | GSAP | Título @200ms, subtítulo @500ms, CTA @800ms, stats @1100ms |
| Contadores | JS + IntersectionObserver | 2s, cubic ease-out, locale-formatted |
| Scroll reveal | AOS | data-aos attributes en secciones y tarjetas |
| ScrollTrigger | GSAP | Barras de progreso se activan al 85% del viewport |
| Barras de fondos | GSAP | ScrollTrigger al 90% del viewport |
| Shimmer progress | CSS | `background-position` animation infinito |
| Notificaciones | CSS | Slide-in desde la derecha, 0.4s |
| Confeti | CSS + JS | 200 partículas animadas con keyframes |
| Transición modo oscuro | CSS | 0.3s en background-color y color |

---

## 12. Impacto Social y Ambiental

### 12.1 Impacto Esperado

El proyecto TreeForLife, aunque es una herramienta digital, tiene el potencial de generar impacto positivo en:

- **Concienciación:** Más de 1,000 visitantes mensuales potenciales podrían conocer la realidad de la deforestación en Nicaragua
- **Recaudación:** Con una meta de $10,000 USD para plantar 10,000 árboles, cada dólar cuenta
- **Empleos:** Se proyecta la creación de 15+ empleos verdes en las comunidades
- **Familias:** Se espera beneficiar a 95+ familias mediante empleo y educación ambiental
- **Hectáreas:** Restauración de 50 hectáreas de bosque nativo

### 12.2 Indicadores de Éxito

| Indicador | Meta | Medición |
|-----------|------|----------|
| Árboles plantados | 10,000 | Seguimiento en plataforma |
| Hectáreas restauradas | 50 | Monitoreo SIG |
| Empleos verdes creados | 15+ | Registro de contratación |
| Familias participantes | 95+ | Censo comunitario |
| Tasa de supervivencia | 76% | Evaluación trimestral |
| Fondos recaudados | $4,580+ | Plataforma de donaciones |

---

## 13. Pruebas y Validación

### 13.1 Pruebas Funcionales

Se realizaron pruebas de las siguientes funcionalidades:

| Funcionalidad | Resultado | Observaciones |
|---------------|-----------|---------------|
| Menú de navegación | ✅ Correcto | Hamburger en móvil, sticky con blur |
| Donaciones | ✅ Correcto | Persistencia, progreso, confeti, sonido |
| Mapas Leaflet | ✅ Correcto | 3 vistas, marcadores, filtros, leyenda |
| Galería con lightbox | ✅ Correcto | Filtros, navegación, teclado |
| Tienda y carrito | ✅ Correcto | Add/remove/qty, persistencia, checkout |
| Modo oscuro | ✅ Correcto | Toggle, persistencia, transición |
| Animaciones | ✅ Correcto | AOS, GSAP, ScrollTrigger |
| Responsive | ✅ Correcto | 3 breakpoints validados |
| Notificaciones | ✅ Correcto | Toast con auto-dismiss |

### 13.2 Pruebas de Persistencia

Se verificó que los datos persisten correctamente al cerrar y reabrir el navegador:

- `localStorage.getItem('totalDonated')` ✅
- `localStorage.getItem('cart')` ✅
- `localStorage.getItem('theme')` ✅

### 13.3 Validación de Coordenadas

Las coordenadas geográficas se verificaron con fuentes oficiales:
- Dipilto: 13.7167, -86.5000 ✅
- San José de Cusmapa: 13.2880, -86.6544 ✅

---

## 14. Manual de Usuario

### 14.1 Navegación Principal

1. **Barra de navegación:** Fija en la parte superior, contiene enlaces a todas las secciones. En móvil, se colapsa en un menú hamburguesa.
2. **Modo oscuro:** Botón con icono de luna/sol en la barra de navegación. Alterna entre tema claro y oscuro. La preferencia se guarda automáticamente.
3. **Barra de progreso de scroll:** Indicador delgado en la parte superior que muestra el avance de lectura.

### 14.2 Donaciones

1. Selecciona un monto rápido ($5, $10, $25, $50, $100) o ingresa un monto personalizado.
2. Presiona "Donar y Plantar Árboles".
3. Observa cómo la barra de progreso avanza y el contador de árboles aumenta.
4. Recibirás una notificación de confirmación.

### 14.3 Mapas Interactivos

1. Selecciona una ubicación (Dipilto, Cusmapa, Zonas Sembradas).
2. Alterna entre modo Real (datos registrados) y Simulación (zonas de riesgo).
3. Activa/desactiva filtros para ver incendios, talas o zonas reforestadas.
4. Haz clic en los marcadores para ver información detallada.
5. Consulta la leyenda para identificar los tipos de marcadores.

### 14.4 Galería

1. Selecciona un filtro para ver imágenes por categoría.
2. Haz clic en cualquier imagen para abrir el lightbox.
3. Navega con las flechas o las teclas ← → del teclado.
4. Presiona Escape o haz clic fuera para cerrar.

### 14.5 Tienda

1. Explora los productos disponibles.
2. Haz clic en "Agregar" para añadir un producto al carrito.
3. Abre el carrito con el botón flotante (🛒) en la esquina inferior derecha.
4. Ajusta cantidades o elimina productos.
5. Presiona "Comprar y Apoyar" para completar la compra.

---

## 15. Cronograma de Desarrollo

| Fase | Período | Actividades | Inversión |
|------|---------|-------------|-----------|
| **Fase 1: Inicio** | 2026 Q1-Q2 | Establecimiento de vivero comunitario, capacitación del equipo, adecuación de terreno | $950 |
| **Fase 2: Plantación** | 2026 Q2-Q3 | Compra de 3,000 plántulas nativas, preparación de 8 hectáreas, plantación comunitaria | $1,850 |
| **Fase 3: Sostenimiento** | 2026 Q3-Q4 | Riego y mantenimiento, 6 talleres de capacitación, sistema de monitoreo básico | $1,120 |
| **Fase 4: Expansión** | 2027 | Aumento a 5,000 árboles/año, creación de 10+ empleos verdes, exploración de certificación de carbono | $2,500+ |

---

## 16. Presupuesto y Recursos

### 16.1 Recursos Humanos

El equipo del proyecto está conformado por 6 miembros con roles especializados:

| Rol | Responsabilidad |
|-----|----------------|
| Coordinador Técnico General | Gestión general del proyecto y supervisión técnica |
| Coordinador Dipilto | Operaciones en terreno en Dipilto |
| Coordinador Cusmapa | Gestión comunitaria en San José de Cusmapa |
| Especialista Financiero | Transparencia y reportes financieros |
| Facilitadora Comunitaria | Educación y participación comunitaria |
| Técnico SIG/Monitoreo | Sistemas de Información Geográfica |

### 16.2 Recursos Tecnológicos

| Recurso | Costo |
|---------|-------|
| GitHub (plan gratuito) | $0 |
| Leaflet.js (open source) | $0 |
| GSAP (plan gratuito) | $0 |
| AOS (open source) | $0 |
| Font Awesome (plan gratuito) | $0 |
| OpenStreetMap (gratuito) | $0 |
| Dominio (proyectado) | ~$10/año |

### 16.3 Presupuesto Financiero

| Concepto | Porcentaje | Monto (2026) |
|----------|-----------|---------------|
| Plantación de Árboles | 45% | $2,061 |
| Preparación de Terrenos | 25% | $1,145 |
| Capacitación Ambiental | 15% | $687 |
| Administración | 10% | $458 |
| Monitoreo | 5% | $229 |

**Total recaudado (2026):** $4,580<br>
**Total utilizado:** $3,620<br>
**Disponible:** $960

---

## 17. Resultados

El proyecto TreeForLife se completó exitosamente, logrando los siguientes resultados:

### 17.1 Resultados Técnicos

| Componente | Estado | Detalle |
|------------|--------|---------|
| Página principal | ✅ Completa | 10 secciones funcionales |
| Mapas interactivos | ✅ Completos | 3 ubicaciones, 5 tipos de marcadores, filtros |
| Donaciones | ✅ Completas | Persistencia, progreso, confeti, sonido |
| Tienda solidaria | ✅ Completa | 6 productos, carrito persistente, checkout |
| Galería | ✅ Completa | 12 imágenes, 6 categorías, lightbox |
| Transparencia | ✅ Completa | Desglose, certificaciones, estado financiero |
| Modo oscuro | ✅ Completo | Toggle con persistencia y transiciones suaves |
| Animaciones | ✅ Completas | AOS, GSAP, ScrollTrigger, CSS animations |
| Diseño responsive | ✅ Completo | 3 breakpoints funcionales |

### 17.2 Estadísticas del Proyecto

- **Líneas de código:** ~1,845 (HTML: 635, CSS: 458, JS: 752)
- **Funciones JavaScript:** 35+
- **Bibliotecas externas:** 5 (Leaflet, GSAP, AOS, Font Awesome, Unsplash)
- **Secciones:** 10
- **Productos:** 6
- **Imágenes de galería:** 12
- **Marcadores de mapa:** 5 tipos
- **Persistencia en localStorage:** 3 claves

---

## 18. Conclusiones

1. **Cumplimiento de objetivos:** Se desarrolló exitosamente una plataforma web funcional que integra herramientas de visualización geoespacial, recaudación de donaciones, comercio solidario y transparencia financiera para apoyar la reforestación en Dipilto y San José de Cusmapa.

2. **Aplicación de conocimientos:** El proyecto demuestra la aplicación práctica de los conceptos de desarrollo web frontend, incluyendo HTML5 semántico, CSS3 avanzado con diseño responsive, y JavaScript vanilla para lógica del lado del cliente.

3. **Tecnologías open source:** Se integraron exitosamente 5 bibliotecas externas (Leaflet.js, GSAP, AOS, Font Awesome) sin necesidad de frameworks pesados, demostrando que es posible crear aplicaciones web complejas con herramientas ligeras y gratuitas.

4. **Usabilidad y experiencia de usuario:** La interfaz es intuitiva, responsiva y accesible, con animaciones profesionales que mejoran la experiencia de navegación sin sacrificar el rendimiento.

5. **Persistencia de datos:** Se implementó almacenamiento local para donaciones, carrito de compras y preferencias de tema, demostrando el uso práctico de la Web Storage API.

6. **Impacto social potencial:** La plataforma tiene el potencial de concienciar a cientos de personas sobre la crisis de deforestación en Nicaragua y facilitar la recaudación de fondos para proyectos de reforestación comunitaria.

---

## 19. Recomendaciones

### 19.1 Mejoras Técnicas a Corto Plazo

1. **Publicación en GitHub Pages:** Desplegar el sitio en GitHub Pages para acceso público inmediato.
2. **Fotos reales:** Reemplazar las imágenes placeholder de Unsplash con fotografías reales de las comunidades de Dipilto y Cusmapa.
3. **Mapa independiente:** Mejorar la integración entre la página principal y la página de mapa independiente.

### 19.2 Mejoras a Mediano Plazo

1. **Pasarela de pago real:** Integrar PayPal, Stripe o Sinpe Móvil para donaciones y compras reales.
2. **Aplicación Web Progresiva (PWA):** Configurar service workers para permitir instalación en dispositivos móviles.
3. **Dashboard de impacto:** Implementar gráficos en tiempo real del número de árboles plantados y CO₂ capturado.
4. **Blog / Noticias:** Agregar una sección de artículos sobre reforestación y actividades comunitarias.

### 19.3 Mejoras a Largo Plazo

1. **Multi-idioma:** Agregar soporte para inglés y lenguas indígenas de la región.
2. **Gamificación:** Implementar logros, ranking de donantes y árboles virtuales para aumentar la participación.
3. **Chatbot:** Asistente virtual para información y donaciones.
4. **API de datos abiertos:** Publicar los datos de monitoreo como API para que otras organizaciones puedan utilizarlos.

---

## 20. Referencias Bibliográficas

1. Leaflet.js — Biblioteca JavaScript para mapas interactivos. https://leafletjs.com/
2. GSAP (GreenSock Animation Platform) — Biblioteca de animaciones. https://gsap.com/
3. AOS (Animate On Scroll) — Biblioteca de animaciones al scroll. https://michalsnik.github.io/aos/
4. Font Awesome — Biblioteca de iconografía vectorial. https://fontawesome.com/
5. OpenStreetMap — Proyecto colaborativo de mapas abiertos. https://www.openstreetmap.org/
6. Esri World Imagery — Capa de imágenes satelitales. https://www.esri.com/
7. Ley 217 — Ley General del Medio Ambiente y los Recursos Naturales. Asamblea Nacional de Nicaragua, 1996.
8. Ley 462 — Ley de Conservación y Utilización Sostenible de la Diversidad Biológica. Asamblea Nacional de Nicaragua, 2003.
9. Ley 585 — Ley de Prohibición de la Tala Ilegal. Asamblea Nacional de Nicaragua, 2006.
10. MARENA — Ministerio del Ambiente y los Recursos Naturales de Nicaragua. https://www.marena.gob.ni/
11. UNAN-León — Universidad Nacional Autónoma de Nicaragua, León. https://www.unanleon.edu.ni/
12. MDN Web Docs — Documentación de tecnologías web. https://developer.mozilla.org/
13. W3C — World Wide Web Consortium, estándares web. https://www.w3.org/

---

<p align="center">
  <strong>TreeForLife</strong> — Proyecto Académico<br>
  UNAN León · CUR Somoto · Ingeniería en Sistemas · III Año · 2026
</p>

<p align="center">
  <em>"Juntos estamos plantando el futuro de Nicaragua"</em>
</p>

<p align="center">
  Repositorio: <a href="https://github.com/Imandro/arboles">github.com/Imandro/arboles</a>
</p>
