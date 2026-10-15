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

- Tres respuestas (tiempo diario, duración prevista y movilidad) asignan puntos a Ambulatorio, Unidad de recuperación y Terapia/cuidados intensivos.
- La capacidad máxima de peso funciona como filtro de compatibilidad cuando se conoce el peso.
- La base, la presencia de cuidador, el presupuesto y la duración estimada ajustan el orden de los modelos.
- Cuando se selecciona un nivel de úlcera diagnosticado, se muestran únicamente los modelos asociados a ese nivel en la tabla de catálogo proporcionada para este prototipo. Esto no constituye recomendación clínica ni confirma idoneidad médica.
- Si el presupuesto no alcanza para los modelos que coinciden, se puede mostrar una alternativa fuera de presupuesto claramente identificada.
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
