function findAccountById(accounts, id) {
  const accountById = accounts.find((account) => account.id === id);
  return accountById;
}

function sortAccountsByLastName(accounts) {
  const accountByLastName = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrowed = 0;
  for(let i = 0; i < books.length; i++){
    for(let j = 0; j < books[i].borrows.length; j++){
      if(account.id === books[i].borrows[j].id){
        totalBorrowed += 1;
      }
    }
  }
  return totalBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  return possessedByAccount();

  function possessedByAccount() {
    let result = [];
    let borrowMatch = [];
    books.forEach((item) => {
      const borrowed = item.borrows;
      const book = {
        id: item.id,
        title: item.title,
        genre: item.genre,
        authorId: item.authorId,
        author: {},
        borrows: {}
      };
      const { id, title, genre, authorId, author, borrows } = book;

      borrowed.forEach((borrow) => {
        if (borrow.id === account.id && borrow.returned === false) {
          result.push(book);
          borrowMatch.push(borrow);
          book.borrows = borrowMatch;
          book.author = authors.filter((auth) => auth.id === book.authorId)[0];
        }
      });
    });
    return result;
  }
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
