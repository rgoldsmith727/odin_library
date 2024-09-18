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

const libraryForm = document.getElementById('libraryForm')  
const bookList = document.getElementById('bookList')

function addBookToLibrary(title, author, pages, read) {
  const newBook =  new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function clearBookList() {
  bookList.textContent = ''
}

function processFormSubmit() {
  const title = libraryForm.title.value 
  const author = libraryForm.author.value
  const pages = libraryForm.pages.value 
  const read = libraryForm.read.checked ? 'read' : 'not read'

  addBookToLibrary(title, author, pages, read)
  clearBookList()
  displayLibrary()
  libraryForm.reset()
}

function displayLibrary() {
  myLibrary.forEach(book => {
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


