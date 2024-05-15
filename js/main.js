const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status
}


const btnAddBook = document.getElementById('btn-add-book');
btnAddBook.addEventListener('click', function (event) {
    event.preventDefault();
    addBookToLibrary()
})

function getStatusValue() {
  let statusEl = document.getElementsByName("status");
  let statusElValue = false;
  statusEl.forEach((element) => {
    if (element.checked) {
      statusElValue = element.value === "true";
    }
  });
  return statusElValue;
}

function createBookCard() {
  const cardContainer = document.getElementById("card-container");

  // Clear existing book cards
  cardContainer.innerHTML = "";

  myLibrary.forEach(function (book, index) {
    let articleEl = document.createElement("article");
    articleEl.classList.add(
      "bg-slate-800",
      "text-white",
      "px-2",
      "py-6",
      "space-y-4",
      "rounded-xl",
      "drop-shadow-lg",
      "flex",
      "flex-col",
      "items-center"
    );

    let bookNoEl = document.createElement("p");
    bookNoEl.classList.add(
      "text-lg",
      "font-bold",
      "underline",
      "underline-offset-4"
    );
    bookNoEl.textContent = index + 1;

    let bookWrapEl = document.createElement("div");
    bookWrapEl.classList.add("space-y-2");

    let bookNameWrapEl = document.createElement("div");
    bookNameWrapEl.classList.add("flex", "items-center", "space-x-2");

    let bookName = document.createElement("h1");
    bookName.classList.add("font-bold", "text-lg");
    bookName.textContent = "Book name:";

    let bookNameTitle = document.createElement("p");
    bookNameTitle.classList.add("text-lg");
    bookNameTitle.textContent = book.title;

    bookNameWrapEl.appendChild(bookName);
    bookNameWrapEl.appendChild(bookNameTitle);

    let bookAuthorWrapEl = document.createElement("div");
    bookAuthorWrapEl.classList.add("flex", "items-center", "space-x-2");

    let bookAuthor = document.createElement("h1");
    bookAuthor.classList.add("font-bold", "text-lg");
    bookAuthor.textContent = "Author:";

    let bookAuthorName = document.createElement("p");
    bookAuthorName.classList.add("text-lg");
    bookAuthorName.textContent = book.author;

    bookAuthorWrapEl.appendChild(bookAuthor);
    bookAuthorWrapEl.appendChild(bookAuthorName);

    let bookPagesWrapEl = document.createElement("div");
    bookPagesWrapEl.classList.add("flex", "items-center", "space-x-2");

    let bookPages = document.createElement("h1");
    bookPages.classList.add("font-bold", "text-lg");
    bookPages.textContent = "Pages:";

    let bookPagesCount = document.createElement("p");
    bookPagesCount.classList.add("text-lg");
    bookPagesCount.textContent = book.pages;

    bookPagesWrapEl.appendChild(bookPages);
    bookPagesWrapEl.appendChild(bookPagesCount);

    let bookStatusWrapEl = document.createElement("div");
    bookStatusWrapEl.classList.add("flex", "items-center", "space-x-2");

    let bookStatus = document.createElement("h1");
    bookStatus.classList.add("font-bold", "text-lg");
    bookStatus.textContent = "Status:";

    let bookStatusValue = document.createElement("p");
    bookStatusValue.classList.add("text-lg");
    bookStatusValue.textContent = book.status ? "Read" : "Unread";

    bookStatusWrapEl.appendChild(bookStatus);
    bookStatusWrapEl.appendChild(bookStatusValue);

    bookWrapEl.appendChild(bookNameWrapEl);
    bookWrapEl.appendChild(bookAuthorWrapEl);
    bookWrapEl.appendChild(bookPagesWrapEl);
    bookWrapEl.appendChild(bookStatusWrapEl);

    articleEl.appendChild(bookNoEl);
    articleEl.appendChild(bookWrapEl);

    cardContainer.appendChild(articleEl);
  });
}


function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = getStatusValue();

  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("unread").checked = true;

  createBookCard();
}
