// Making Book Form Visible --------------------------------------------------------------------------------------------------------------------------------------

const bookForm = document.querySelector('.bookForm');
const popupButton = document.querySelector('.bookBtn');
const close = document.querySelector('.closeBtn');

function makeBookFormVisible() {
    popupButton.addEventListener('click', ()=> {
        bookForm.style.display = 'flex';
    });
    
    close.addEventListener('click', ()=> {
        bookForm.style.display = 'none';
    })
}

makeBookFormVisible();

// Storing Book --------------------------------------------------------------------------------------------------------------------------------------------------
const submit = document.querySelector('.submitBtn')
const bookTitle = document.querySelector('.bookTitle');
const bookAuthor = document.querySelector('.bookAuthor');
const bookPages = document.querySelector('.bookPages');
const resetForm = document.querySelector('.form')

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = ()=> {
        return `${title}, ${author}, ${pages}`
    }
}

function addBookToLibrary() {
    submit.addEventListener('click', ()=>   {
        let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
        bookForm.style.display = 'none';
        resetForm.reset()
        myLibrary.push(newBook);
    })
}

addBookToLibrary();

// Creating Book Card -------------------------------------------------------------------------------------------------------------------------------------------

const displayBooks = document.querySelector('.bookList');

function creatingBook(title, author, pages) {
    let bookCard = document.createElement('div');
    let titlePlace = document.createElement('h1');
    let authorPlace = document.createElement('h1');
    let pageCount = document.createElement('h1');
            
    bookCard.classList.add('bookCard');
    titlePlace.textContent = `" ${title} "`;
    authorPlace.textContent = `By: " ${author} "`;
    pageCount.textContent = `${pages} Pages`;
            
    displayBooks.appendChild(bookCard);
    bookCard.appendChild(titlePlace);
    bookCard.appendChild(authorPlace);
    bookCard.appendChild(pageCount);
}

// Displaying Books ---------------------------------------------------------------------------------------------------------------------------------------------

function displayBookList() {
    submit.addEventListener('click', ()=> {
        myLibrary.forEach(book => {
            myLibrary = [];
            creatingBook(book.title, book.author, book.pages);

        })
    })
}

displayBookList();

