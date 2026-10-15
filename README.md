# Acolsa Mattress Quiz — prototipo

Cuestionario web inicial para orientar a visitantes hacia características de colchones hospitalarios. Está hecho con HTML, CSS y JavaScript sin framework ni dependencias.

## Archivos

- `index.html`: estructura y contenido de la página.
- `styles.css`: apariencia adaptable a móviles y escritorio.
- `app.js`: preguntas, navegación y lógica de resultado.

## Probar en tu computadora

La forma más sencilla es abrir `index.html` en un navegador. Para una experiencia de desarrollo más fiable, usa una extensión de servidor local en tu editor (por ejemplo, Live Server en VS Code).

## Publicar con GitHub + Vercel

1. Crea un repositorio nuevo en GitHub.
2. Sube los tres archivos (`index.html`, `styles.css`, `app.js`) y este `README.md` a la raíz del repositorio.
3. En Vercel, elige **Add New → Project** e importa el repositorio de GitHub.
4. Como es una web estática, no necesitas instalar dependencias ni configurar un comando de build. Deja los ajustes por defecto si Vercel detecta correctamente el proyecto.
5. Pulsa **Deploy**. Vercel te dará una URL de prueba.
6. Cada vez que actualices y guardes cambios en GitHub, Vercel podrá desplegar la nueva versión automáticamente.

Documentación oficial: https://vercel.com/docs/git

## Antes de publicar para clientes

Este proyecto es un prototipo. No recomienda todavía un modelo real del catálogo. Antes de usarlo comercialmente:

- Sustituye la lógica de ejemplo por reglas revisadas con el equipo de producto/ventas.
- Añade nombres, imágenes, fichas técnicas y enlaces reales de modelos compatibles.
- Verifica cada afirmación de producto (impermeabilidad, compatibilidad con camas articuladas, limpieza, límites de carga, etc.).
- Haz pruebas en móviles y con teclado/lector de pantalla.
- Si añades formularios para recoger datos personales, define la finalidad, el consentimiento y el tratamiento de esos datos.
- No lo presentes como herramienta de diagnóstico ni de prescripción clínica.

## Personalizar preguntas y resultados

Edita el arreglo `questions` al inicio de `app.js`. Las reglas que generan el resultado están en la función `showResult()`. Mantén las preguntas y las reglas del catálogo separadas al crecer el proyecto, para que el mantenimiento sea más sencillo.

## Inspiración de estructura

La experiencia toma como referencia general los cuestionarios interactivos de selección guiada, incluido https://who-is-your-ideal-killer.vercel.app/. El código de este proyecto es nuevo y no depende del código fuente de ese sitio.


## Diseño visual actualizado

Fondo blanco, tipografía negra, Montserrat y elementos geométricos lineales. Montserrat se carga desde Google Fonts; si no hay conexión, el navegador usa una alternativa sans-serif.

## Importante antes de publicarlo

Las reglas de recomendación y el ejemplo de producto siguen siendo provisionales. Antes de usarlo con clientes, comparte las fichas técnicas de los colchones hospitalarios (modelos, materiales, medidas, cubierta, uso previsto, compatibilidades y limitaciones). Con esa información podremos vincular las respuestas con productos reales y revisar cuidadosamente las preguntas relacionadas con necesidades clínicas. No debe presentarse como herramienta de diagnóstico ni como sustituto de una valoración profesional.
