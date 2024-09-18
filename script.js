const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages 
  this.read = read 
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} pages and has been ${this.read}.`
}

function addBookToLibrary(title, author, pages, read) {
  const newBook =  new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function processFormSubmit() {
  const libraryForm = document.getElementById('libraryForm')
  const title = libraryForm.title.value 
  const author = libraryForm.author.value
  const pages = libraryForm.pages.value 
  const read = libraryForm.read.value ? 'read' : 'not read'

  addBookToLibrary(title, author, pages, read)

  const bookList = document.getElementById('bookList')
  bookList.textContent = ''
  displayLibrary()
}

function displayLibrary() {
  myLibrary.forEach(book => {
    const bookList = document.getElementById('bookList')
    const p = document.createElement('p')
    p.textContent = book.info()
    bookList.appendChild(p)
  })
}

addBookToLibrary('The Chamber', 'John Grisham', 306, 'read')
addBookToLibrary('Where the Caged Bird Sings', 'Maya Angelou', 253, 'not read')
addBookToLibrary('The Red Door', 'Frieda McFadden', 367, 'read')

const libraryFormButton = document.getElementById('libraryFormButton')

libraryFormButton.addEventListener('click', e => {
  e.preventDefault()
  processFormSubmit()
})


displayLibrary()
