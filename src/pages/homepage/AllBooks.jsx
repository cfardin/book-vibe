import React, { use } from "react";
import BookCard from "./BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div className="md:w-8/12 mx-auto">
         <div className="mt-25 mb-25">
      <h3 className="text-center text-[40px] font-bold mb-9">Books</h3>


      {/* books cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {
            books.map((book, index) => (
            <BookCard key={index} book={book}></BookCard>
            ))
        }
      </div>
    </div>
    </div>
   
  );
};

export default AllBooks;
