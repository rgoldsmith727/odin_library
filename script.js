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
  const read = libraryForm.read.checked ? 'Read' : 'Not Read'

  addBookToLibrary(title, author, pages, read)
  clearBookList()
  displayLibrary()
  libraryForm.reset()
}

function displayLibrary() {
  myLibrary.forEach(book => {
    const div = document.createElement('div')
    div.classList.toggle('card')
    const index = myLibrary.indexOf(book)
    div.setAttribute('data-index', index)

    const deleteCard = document.createElement('button')
    deleteCard.setAttribute('type', 'button')
    deleteCard.classList.toggle('deleteCard')
    deleteCard.textContent = 'x'
    div.appendChild(deleteCard)

    deleteCard.addEventListener('click', e => {
      const card = e.target.closest('.card')
      const dataIndex = card.getAttribute('data-index')
      myLibrary.splice(dataIndex, 1)
      clearBookList()
      displayLibrary()
    })
    
    const title = document.createElement('div')
    title.classList.toggle('bookTitle')
    title.textContent = book.title
    div.appendChild(title)
    
    const author = document.createElement('div')
    author.classList.toggle('bookAuthor')
    author.textContent = book.author
    div.appendChild(author)
    
    const bottomRow = document.createElement('div')
    bottomRow.classList.toggle('bottom-row')
    div.appendChild(bottomRow)
    
    const pages = document.createElement('div')
    pages.classList.toggle('bookPages')
    pages.textContent = book.pages
    bottomRow.appendChild(pages)
    
    const read = document.createElement('button')
    read.setAttribute('type', 'button')
    read.classList.toggle('bookRead')
    read.textContent = book.read
    bottomRow.appendChild(read)

    read.addEventListener('click', e=> {
      read.textContent = e.target.textContent === 'Read' ? 'Not Read' : 'Read'
    })
    
    bookList.appendChild(div)
  })
}

const libraryFormButton = document.getElementById('libraryFormButton')


libraryFormButton.addEventListener('click', e => {
  e.preventDefault()
  processFormSubmit()
})
