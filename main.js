// ------------ Declaring Variables --------------------- //

const dialog = document.querySelector('dialog')
const addBookBtn = document.querySelector('.add-book')
const addBook = document.querySelector('.submit-form')
const form = document.querySelector('.add-book-form')
const bookCards = document.querySelector('.book-cards')
const bookStatus = document.querySelector('.status')

// ---------------------- Handing Modal --------------------

addBookBtn.addEventListener('click', () => {
  dialog.showModal()
})

window.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close()
  }
})

// ------------------------ Library Logic ------------------------

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.index = myLibrary.length

  this.toggleRead = function () {
    this.read = !this.read
  }
}

const addToLibrary = (e) => {
  e.preventDefault()
  let title = e.target[0].value
  let author = e.target[1].value
  let pages = e.target[2].value
  let read = e.target[3].checked

  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  dialog.close()
  displayBook()
  title=""
  author=""
  pages=""
  read=false
  form.reset()
}

const displayBook = () => {
  bookCards.innerHTML=""
  myLibrary.forEach((book) => {
    let html = `
    <div class="book-card" data-index=${book.index}>
    <h1 class="book-title">${book.title}</h1>
    <h3 class="author">${book.author}</h3>
    <h3 class="pages">${book.pages} Pages</h3>
    <button onClick="toggleStatus(this)" class="status ${book.read ? 'read' : 'not-read'}">${
      book.read ? 'Read' : 'Not Read'
    }</button>
    <button onClick="deleteBook(this)" class="delete">Delete</button>
  </div>
    `
    bookCards.innerHTML += html
  })
}




// ------------ Event LIsteners ----------------------- //

form.addEventListener('submit', (e) => addToLibrary(e))

const toggleStatus = (e) => {
  const book = myLibrary.filter(book => book.index == e.parentElement.getAttribute('data-index'))
  book[0].toggleRead()
  displayBook()
}


const deleteBook = (e) => {
  const index = e.parentElement.getAttribute('data-index')
  myLibrary.splice(index, index+1)
  displayBook()
}