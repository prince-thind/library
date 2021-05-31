let addButton = document.querySelector(".add-book");
let menuDiv = document.querySelector(".menu");
let createButton = document.querySelector(".submit");
let cancelButton = document.querySelector(".cancel");
let removeButton = document.querySelector(".remove");
let inputAuthor = document.querySelector("#input-author");
let inputTitle = document.querySelector("#input-title");
let inputPages = document.querySelector("#input-pages");
let inputRead = document.querySelector("#input-read");
let cardContainer = document.querySelector(".card-container");
let totalBooks = document.querySelector(".books-total");
let booksRead = document.querySelector(".books-read");
let id = 0;

let books = [];
//books.push(new Book("title", "author", "pages", "yes"));

addButton.addEventListener("click", takeInput);
createButton.addEventListener("click", makeBook);
cancelButton.addEventListener("click", cancel);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id++;
  }
}

function takeInput() {
  menuDiv.style.display = "block";
  displayBooks();
}

function makeBook() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let read = inputRead.value;
  let book = new Book(title, author, pages, read);
  books.push(book);
  displayBooks();
  reset();
}

function removeBook(event) {
  let index = null;
  for (book of books) {
    if (event.target.parentElement.id == book.id) {
      index = books.indexOf(book);
    }
  }
  books.splice(index, 1);
  displayBooks();
}

function cancel() {
  menuDiv.style.display = "none";
  displayBooks();
}

function displayBooks() {
  cardContainer.innerHTML = "";
  for (let book of books) {
    let card = document.createElement("div");
    let title = document.createElement("div");
    let pages = document.createElement("div");
    let author = document.createElement("div");
    let read = document.createElement("div");
    let remove = document.createElement("button");

    card.classList.add("card");
    pages.classList.add("pages");
    author.classList.add("author");
    title.classList.add("title");
    read.classList.add("read");
    remove.classList.add("remove");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    remove.textContent = "remove";

    card.id = book.id;

    remove.addEventListener("click", removeBook);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
    cardContainer.appendChild(card);
  }
  updateStatusBar();
}
function updateStatusBar() {
  let total = books.length;
  let read = books.filter((book) => {
    return book.read == "yes" || book.read == "true";
  }).length;

  totalBooks.textContent = `Total Books: ${total}`;
  booksRead.textContent = `Books Read: ${read}`;
}
function reset() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.value = "";
}
