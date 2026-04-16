import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookContext";


// const booksPromise = fetch("/booksData.json").then((res) => res.json());



const BookInfo = () => {
  const { id } = useParams();
  
  const books = useLoaderData();
  const expectedBook = books.find(book => book.bookId === Number(id) );

//   console.log(expectedBook);

  const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = expectedBook;

  const {storedBooks, setStoredBooks, handleMarkAsRead} = useContext(BookContext);


  return (
    <div>
      <div className="w-10/12 mx-auto my-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Image */}
          <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-10 md:w-5/12">
            <img
              src={image}
              alt={bookName}
              className="max-h-96 object-contain"
            />
          </div>

          {/* Right - Details */}
          <div className="md:w-7/12 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p className="text-gray-600">By : {author}</p>

            <hr />
            <p className="text-gray-700">{category}</p>
            <hr />

            <p>
              <span className="font-bold">Review : </span>
              <span className="text-gray-600">{review}</span>
            </p>

            {/* Tags */}
            <div className="flex items-center gap-3 border-b pb-4">
              <span className="font-bold">Tag</span>
              {tags.map((tag, i) => (
                <span key={i} className="text-green-500 font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-2 text-gray-600 border-b pb-4">
              <div className="flex gap-2">
                <span className="w-44">Number of Pages:</span>
                <span className="font-bold text-black">{totalPages}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-44">Publisher:</span>
                <span className="font-bold text-black">{publisher}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-44">Year of Publishing:</span>
                <span className="font-bold text-black">{yearOfPublishing}</span>
              </div>
              <div className="flex gap-2">
                <span className="w-44">Rating:</span>
                <span className="font-bold text-black">{rating}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2">
              <button onClick={()=> handleMarkAsRead(expectedBook)} className="btn btn-outline px-6">Mark as Read</button>
              <button className="btn bg-cyan-400 text-white px-6">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
