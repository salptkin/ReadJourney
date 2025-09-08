const randomBooks = (books, limit) => {
  const randomBooks = [...books].sort(() => 0.5 - Math.random());
  return randomBooks.slice(0, limit);
};

export default randomBooks;
