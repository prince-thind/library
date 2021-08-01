const addButton = document.querySelector('#add-book');
const totalBooks = document.querySelector('#total-books');
const readBooks = document.querySelector('#read-books');

const menuDiv = document.querySelector('#menu');
const form = document.querySelector('#form');

const cardContainer = document.querySelector('#card-container');

let books = [];

addButton.addEventListener('click', takeInput);
form.addEventListener('submit', handleForm);
form.addEventListener('reset', reset);

initialize();

function initialize() {
  cardContainer.innerHTML='';
  if (localStorage.hasOwnProperty('local-books')) {
    const localBooks = localStorage.getItem('local-books');
    books = JSON.parse(localBooks);
    if (!Array.isArray(books)) books = [];
    renderBooks();
  }
}
function takeInput() {
  menuDiv.classList.toggle('hidden');
  renderBooks();
}

function handleForm(e) {
  e.preventDefault();
  const input = e.target;
  makeBook(input);
  renderBooks();
  updateLocalStorage(books);
  input.reset();
}

function updateLocalStorage(arr) {
  const strBooks = JSON.stringify(arr);
  localStorage.setItem('local-books', strBooks);
}

function reset() {
  menuDiv.classList.toggle('hidden');
  renderBooks();
}

function book(title, author, body, pages, read) {
  const book = {};
  book.title = title;
  book.author = author;
  book.body = body;
  book.pages = pages;
  book.read = read;
  return book;
}

function makeBook(input) {
  const title = input.title.value;
  const author = input.author.value;
  const pages = input.pages.value;
  const body = input.body.value;
  const read = input.read.value === 'yes' ? true : false;
  const bookObj = book(title, author, body, pages, read);
  books.push(bookObj);
}

function renderBooks() {
  cardContainer.innerHTML = '';
  for (const book of books) {
    const card = document.createElement('div');
    const title = document.createElement('div');
    const pages = document.createElement('div');
    const author = document.createElement('div');
    const cardBody = document.createElement('div');
    const read = document.createElement('div');
    const deleteDiv = document.createElement('button');

    card.classList.add('card');
    pages.classList.add('pages');
    author.classList.add('author');
    cardBody.classList.add('card-body');
    title.classList.add('title');
    read.classList.add('read');
    read.classList.add('center-icons');
    deleteDiv.classList.add('delete');
    deleteDiv.classList.add('center-icons');

    title.textContent = book.title;
    author.textContent = book.author;
    cardBody.textContent = book.body;
    pages.textContent = book.pages ? `Pages:${book.pages}` : '';

    if (book.read) {
      read.classList.add('read-true');
      read.innerHTML = 'read<span class="material-icons">check_circle</span>';
    } else {
      read.classList.add('read-false');
      read.innerHTML = 'read<span class="material-icons">dangerous</span>';
    }
    deleteDiv.innerHTML = '<span class="material-icons">delete</span>';
    card.setAttribute('data-id', books.indexOf(book));

    deleteDiv.addEventListener('click', deleteBook);

    card.appendChild(title);
    card.appendChild(author);
    card.append(cardBody);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteDiv);
    cardContainer.appendChild(card);
  }

  updateStatusBar();
}

function deleteBook(event) {
  const confirmation = confirm('Are you sure you want to delete this book?');
  if (confirmation) {
    const index = event.target.parentElement.getAttribute('data-id');
    books.splice(index, 1);
    renderBooks();
    updateLocalStorage(books);
  }
}

function updateStatusBar() {
  let total = books.length;
  let read = books.reduce((sum, book) => {
    return sum + book.read;
  }, 0);

  totalBooks.textContent = `Total Books: ${total}`;
  readBooks.textContent = `Books Read: ${read}`;
}
