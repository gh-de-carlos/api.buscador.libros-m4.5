const main = document.querySelector("main");
const form = document.querySelector("form");
const loader = document.querySelector(".loading");
const template = document.querySelector("#results");

// evento submit del formulario
form.addEventListener("submit", buscarLibrosPorAutor);

// función principal de búsqueda y renderizado 
async function buscarLibrosPorAutor(e) {
  e.preventDefault();
  const search = e.target.elements.search.value || "J. K. Rowling";
  
  loader.style.display = "flex";
  main.innerHTML = '';
  
  // animación muy loca para presentar
  // e.target.classList.remove("spin");
  // void e.target.offsetWidth;            // oooh pedazo de truco.
  // e.target.classList.add("spin");
  
  const data = await getData(search);   // try different line order
  const table = requestView(data);
  
  setTimeout(() => {                    // call order here is important!
    main.innerHTML = '';
    main.appendChild(table);
    loader.style.display = "none";
  }, 1500);
}

async function getData(search) {
  const url = `https://openlibrary.org/search.json?author=${search}&limit=10`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error('Oops! Algo falló en la carga:', error);
    return [];
  }
}

function requestView(data) {
  console.log(data);
  const clone = template.content.cloneNode(true);
  const table = clone.querySelector('.table');
  const trs = table.querySelectorAll('.row');
  
  data.forEach((book, index) => {
    const tds = trs[index].querySelectorAll('td');
    tds[0].textContent = book.first_publish_year;
    tds[1].textContent = book.title;
    tds[2].textContent = book.author_name[0];
    tds[3].innerHTML = `<img src="https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-S.jpg?default=false"/>`;
  })
  return clone;
}

// UTILIDADES

// animación del loader
// esto depende del truco de la visibilidad del elemento
// cambiar a una función que sea invocada dinámicamente
// y oculte el scope necesario.
setInterval(animateLoader, 100);
let index = 0;
const message = "Buscando.....".split("");
function animateLoader() {
  loader.textContent += message[index];
  if (index === message.length - 1) {
    loader.textContent = "";
    index = 0;
  } else {
    index++;
  }
}

// manejo de errores con las imágenes.
window.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') e.target.src = './assets/img/book-placeholder-s.png';
}, true);