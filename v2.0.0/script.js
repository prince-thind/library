const addButton = document.querySelector(".add-book");
const totalBooks = document.querySelector(".total-books");
const readBooks = document.querySelector(".read-books");

const menuDiv = document.querySelector(".menu");
const createButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const inputPages = document.querySelector("#input-pages");
const inputReadYes = document.querySelector("#input-read-yes");

const cardContainer = document.querySelector(".card-container");
const removeCard = document.querySelector(".remove");

const books = [];

addButton.addEventListener("click", takeInput);
createButton.addEventListener("click", makeBook);
cancelButton.addEventListener("click", cancel);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function takeInput() {
  menuDiv.classList.toggle("hidden");
  displayBooks();
}

function makeBook() {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const read = getRead();
  const book = new Book(title, author, pages, read);
  books.push(book);
  displayBooks();

  menuDiv.classList.toggle("hidden");
  reset();
}

function cancel() {
  menuDiv.classList.toggle("hidden");
  displayBooks();
}

function removeBook(event) {
  let index = event.target.parentElement.getAttribute("data-id");
  books.splice(index, 1);
  displayBooks();
}

function displayBooks() {
  cardContainer.innerHTML = "";
  for (let book of books) {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const pages = document.createElement("div");
    const author = document.createElement("div");
    const read = document.createElement("div");
    const remove = document.createElement("button");

    card.classList.add("card");
    pages.classList.add("pages");
    author.classList.add("author");
    title.classList.add("title");
    read.classList.add("read");
    remove.classList.add("remove");

    title.textContent = book.title || "??";
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages;
    read.textContent = book.read ? "Read: True" : "Read:No";
    remove.textContent = "Remove?";

    card.setAttribute("data-id", books.indexOf(book));

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
    return book.read;
  }).length;

  totalBooks.textContent = `Total Books: ${total}`;
  readBooks.textContent = `Books Read: ${read}`;
}

function reset() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  inputRead.value = "";
}

function getRead() {
  if (inputReadYes.checked) {
    return true;
  }
  return false;
}
