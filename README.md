# Cuestionario de colchones hospitalarios | acolsa.mx

Prototipo estático en HTML, CSS y JavaScript para orientar a compradores hacia modelos del catálogo de acolsa.mx. La interfaz usa fondo blanco, texto negro, Montserrat con alternativas Avenir/sans-serif y recursos de imagen proporcionados por el usuario.

## Archivos

- `index.html`: estructura, contenido de marca y advertencias.
- `styles.css`: diseño adaptable a escritorio y móvil.
- `app.js`: preguntas, catálogo, filtros de compatibilidad y puntuación.

## Probar localmente

Abre `index.html` en un navegador o sirve la carpeta con una extensión como Live Server en VS Code.

## Publicar con GitHub + Vercel

1. Sustituye los archivos anteriores en la raíz del repositorio por los de esta carpeta.
2. Haz commit y push a GitHub.
3. Vercel volverá a desplegar el sitio si el repositorio está conectado. Es una web estática: no requiere instalación de dependencias ni comando de build.

## Lógica del cuestionario

- Cada respuesta aporta 1 punto base a todos los modelos y 2 puntos adicionales a los modelos que coinciden con ese criterio. Los resultados muestran hasta tres modelos mejor puntuados.
- Tiempo diario de uso, duración prevista y movilidad también asignan puntos a las tres áreas hospitalarias.
- La capacidad máxima de peso funciona como filtro de compatibilidad; si ningún modelo puede soportar el rango elegido, se muestran los canales de contacto de acolsa.mx para solicitar asesoría profesional.
- Tipo de cama, disponibilidad de cuidador, presupuesto y nivel de úlcera ajustan la puntuación. Las asociaciones por nivel de úlcera son las proporcionadas para este prototipo y no constituyen recomendación clínica ni confirman idoneidad médica.
- Cada tarjeta incluye un enlace a la ficha del producto en la tienda y otro para cotizar por volumen en la página de contacto.
- No se envían las respuestas a un servidor.

## Antes de publicar para clientes

Verifica con el equipo de producto y profesionales sanitarios todas las especificaciones, afirmaciones y reglas. En particular:

- Confirma capacidades máximas de peso, precios, garantías, vida útil, compatibilidad con bases y requisitos de instalación.
- Revisa que las imágenes remotas sigan disponibles y que el uso comercial esté permitido.
- Valida la lógica de puntuación con el equipo comercial y sanitario. Las asociaciones de producto por nivel de úlcera son las proporcionadas para el prototipo y no deben presentarse como indicación clínica universal.
- Los colchones no sustituyen la atención médica, la valoración de úlceras por presión ni los cambios de posición y cuidados indicados por el equipo sanitario.
- No presentes esta web como instrumento de diagnóstico o prescripción.

## Recursos de marca y catálogo

Los logos y las imágenes de producto se cargan desde las URLs de `acolsa.mx` proporcionadas por el usuario. Si una URL cambia, actualiza el campo `image` del modelo correspondiente en `app.js`. El logo blanco se conserva referenciado en `ASSETS.logoWhite` para posibles secciones oscuras futuras; la interfaz actual utiliza fondo blanco y el logo negro.
