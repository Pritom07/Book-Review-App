# Book-Review-App

Live link -- https://book-reviewer-app.netlify.app/

Modern UI with Figma-Inspired Design:
1.The website layout follows a Figma design with a visually pleasing color palette and relevant images.
2.Responsive design for all screen sizes (small, medium, large, and extra-large devices).

Navigation Bar:
1.Contains a logo or website name on the left.
2.Three menu items: Home, Listed Books, Pages to Read.
3.Two buttons: “Sign In” and “Sign Up” (without functionality).
4.Active Route Highlighting for navigation.

 Banner Section:
 1.Title and "View The List" button (redirects to Listed Books page).
 2.Relevant image on the right side.

 Dynamic JSON Data:
 1.A JSON file with at least 6 books, each containing details like:
     bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing.

Books Section:
1.Each book card contains:
     Image, Tags, Book Name, Author, Category, Rating.
2.Clicking a book card redirects to the Book Details Page.

Book Details Page (Dynamic Route):
1.Displays detailed information:
    Image, Book Name, Author, Category, Review, Tags, Total Pages, Publisher, Year of Publishing, Rating.

Two Buttons:
1."Read" → Adds the book to the Read List.
2."Wishlist" → Adds the book to the Wishlist.

Read & Wishlist Functionality (Local Storage):
1.Clicking "Read" or "Wishlist" for the first time shows a toast alert.
2.Clicking again on the same button → shows an alert that it’s already added.
3.A book added to "Read" cannot be added to "Wishlist" (shows a warning).

 Listed Books Page:
 1.Shows books from Read and Wishlist (retrieved from local storage).
 2.Dropdown Sorting Options: Sort by Rating, Number of Pages, Published Year.
 3.Tab System:
     Default: Readlist Books List.
     Click on Wishlist Tab → Shows Wishlist Books.

Listed Books Cards:
1.Each card contains:
   Image, Book Name, Author, Category, Tags, Total Pages, Publisher, Year of Publishing, Rating.
2."View Details" button → redirects to the Book Details Page.

Pages to Read Page:
 1.Custom Shape Bar Chart
 2.Displays books against their total pages.

404 Not Found Page:
1.A custom 404 page for handling invalid routes.

Fully Responsive & User-Friendly UI:
1.Works on all devices (Mobile, Tablet, Desktop)
2.Minimalistic, Clean & Intuitive design.




  






 
