const form = document.querySelector("form");
const loader = document.querySelector(".loading");
const template = document.querySelector("#results");
form.addEventListener("submit", buscarLibrosPorAutor);

// manejo de errores con las imágenes.
window.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') e.target.src = './assets/img/book-placeholder-s.png';
}, true);

async function buscarLibrosPorAutor(e) {
  e.preventDefault();
  const search = e.target.elements.search.value || "J. K. Rowling";
  
  loader.style.display = "flex";
  e.target.classList.remove("spin");
  void e.target.offsetWidth;            // oooh pedazo de truco.
  e.target.classList.add("spin");
  
  setTimeout(() => {                    // call order here is important!
    document.body.innerHTML = '';
    document.body.appendChild(table);
  }, 2500);
  
  const data = await getData(search);   // try different line order
  const table = requestView(data);
  
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


// TODO esto depende del truco de la visibilidad del elemento
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

// la api tiene 8 campos al nivel 1.
// docs es la que nos interesa.
// es un arreglo de {} y dentro las props:
// docs[n].first_publish_year
// docs[n].title
// docs[n].author_name[0]
// docs[n].cover_edition_key, agregar -M.jpg e insertar en img:src
// https://covers.openlibrary.org/b/olid/OL12727407M-M.jpg