function findAuthorById(authors, id) {
  const authorById = authors.find((author) => author.id === id);
  return authorById;
}

function findBookById(books, id) {
  const bookById = books.find((book) => book.id === id);
  return bookById;
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) => book.borrows.every((borrow) => borrow.returned));
   let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
  let finalArray =[[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  const borrowersForBooks = books.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id); return { ...borrow, ...account };
  })
    .slice(0, 10);
  return borrowersForBooks;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
