<h1 style="text-align: center"><img src="favicon.png" style="width: 25px; border-radius: 50%"/> Módulo 4 - AE5 - "BuscaLibros API" <img src="favicon.png" style="width: 25px; border-radius: 50%"/></h1>

## Maquetas:

Vista inicial sugerida:
![mockup o entrega del ejercicio][0]

y cuando se hace clic en el buscador... (o mientras tipea):
![mockup o entrega del ejercicio][1]

Entrega:
![entrega][2]



## 🚀 OBJETIVO

Una pequeña biblioteca local quiere crear una herramienta en línea para que sus lectores puedan buscar libros por autor. Ustedes fueron contratados para desarrollar la primera versión del prototipo. Para esta actividad, simularán el comportamiento usando una API pública (Open Library o un archivo JSON).

## 👉 REQUISITOS

1. Divídanse en equipos y repartan responsabilidades:
  - ✔️ Estructura HTML.
  - ✔️ Lógica JavaScript.
  - ✔️ Estilos CSS opcionales.
  - Manejo de errores y validaciones.
2. El proyecto debe incluir:
  - ✔️ Un campo de texto donde el usuario pueda ingresar el nombre de un autor.
  - ✔️ Un botón con el texto "Buscar libros" .
  - ✔️ Un contenedor donde se mostrarán los resultados.
3. En el archivo JavaScript, creen una función `buscarLibrosPorAutor()` que:
  - ✔️ Use fetch junto con async/await para realizar una solicitud a esta API: [https://openlibrary.org/search.json?author=nombre_del_autor]()
  - ✔️ Reemplace `nombre_del_autor` con el valor ingresado por el usuario.
4. Procesen la respuesta `json` y:
  - ✔️ Iteren sobre los primeros 10 libros obtenidos.
  - ✔️ Muestren el título del libro, el año de publicación, y el autor (puede haber varios).
5. ✔️ Agreguen un mensaje de "Cargando resultados..." mientras se espera la respuesta.
6. Manejen los siguientes casos:
  - Si no se encuentran resultados, mostrar un mensaje adecuado.
  - Si hay un error de red o respuesta no válida, mostrar un error en pantalla.
7. **Bonus:**
  - ✔️ Permitir al usuario volver a realizar otra búsqueda sin recargar la página.
  - Mostrar un contador con el número total de resultados encontrados.

**RESULTADO ESPERADO**

Una pequeña aplicación web funcional donde, al buscar por autor, se haga una solicitud AJAX usando `fetch`, se espere la respuesta con `await`, y se muestren libros en pantalla dinámicamente.


## 👀 NOTAS

- La api tiene 8 campos al nivel 1.
  - docs es la que nos interesa.
  - es un arreglo de {} y dentro las props:
  - `docs[n].first_publish_year`
  - `docs[n].title`
  - `docs[n].author_name[0]`
  - `docs[n].cover_edition_key`, agregar -M.jpg e insertar en img:src
  - https://covers.openlibrary.org/b/olid/OL12727407M-M.jpg
- **DEBOUNCING OR NOT?** ❌ la API es muy lenta como para que sea funcional.
- TODO En este momento del desarrollo, aún falta trasladar el manejo de errores a un mensaje en la vista de usuario en los casos SIN RESULTADOS, ERROR DE RED

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png
[1]:./assets/utils/flow.png
[2]:./assets/utils/entrega.png
[3]:
[4]:
[5]:
[6]:

