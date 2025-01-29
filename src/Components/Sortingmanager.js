const sortedarray = (sortlistindex_fromdropdown, read_writelist, bookdata) => {
  const mappedArray = read_writelist.map((bookid) => {
    const book = bookdata.find((b) => b.bookId === bookid);
    let sortingValue;

    if (sortlistindex_fromdropdown === 1) {
      sortingValue = book.rating;
    } else if (sortlistindex_fromdropdown === 2) {
      sortingValue = book.totalPages;
    } else if (sortlistindex_fromdropdown === 3) {
      sortingValue = book.yearOfPublishing;
    }

    return { bookid, sortingValue };
  });

  mappedArray.sort((a, b) => a.sortingValue - b.sortingValue);

  const res = mappedArray.map((item) => item.bookid);
  return res;
};

export default sortedarray;
