import { toast } from "react-toastify";
const getwish = () => {
  const wishid = localStorage.getItem("wishbookid");
  if (wishid) {
    return JSON.parse(wishid);
  } else {
    return [];
  }
};

const getread = () => {
  const readid = localStorage.getItem("readbookid");
  if (readid) {
    return JSON.parse(readid);
  } else {
    return [];
  }
};

const setwish = (wishlist) => {
  const stringified = JSON.stringify(wishlist);
  localStorage.setItem("wishbookid", stringified);
};

const setread = (readlist) => {
  const stringified = JSON.stringify(readlist);
  localStorage.setItem("readbookid", stringified);
};

const addwishid = (bookid) => {
  const wishlist = getwish();
  const readlist = getread();
  if (readlist) {
    const ispresentreadlist = readlist.find((bookidx) => bookidx === bookid);
    if (!ispresentreadlist) {
      const finding = wishlist.find((bookidx) => bookidx === bookid);
      if (!finding) {
        wishlist.push(bookid);
        setwish(wishlist);
        toast.success("Book added successfully in the Wishlist");
        return;
      } else {
        toast.warn("Opps! Book already present in the Wishlist");
        return;
      }
    }
    if (ispresentreadlist) {
      toast.warn(
        "Sorry! The book you want to wish already present in the Readlist"
      );
      return;
    }
  }
};

const addreadid = (bookid) => {
  const readlist = getread();
  const finding = readlist.find((bookidx) => bookidx === bookid);
  if (!finding) {
    readlist.push(bookid);
    setread(readlist);
    toast.success("Book added successfully in the Readlist");
    return;
  } else {
    toast.warn(
      `The book is already present in Readlist.A book cann't be added multiple time in Readlist`
    );
  }
};

export { addwishid, addreadid, getread, getwish };
