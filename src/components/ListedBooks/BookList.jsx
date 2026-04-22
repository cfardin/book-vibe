import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookContext";


const BookList = ({sortingType}) => {

  const {storedBooks} = useContext(BookContext);
  const [filterReadList, setFilterReadList] = useState(storedBooks)

  useEffect(()=>{
    if(sortingType){
      if(sortingType === 'pages'){
        const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
        console.log(sortedData);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilterReadList(sortedData);
      } else {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        setFilterReadList(sortedData);
      }
    }
  },[sortingType, storedBooks] )

  return (
    <div className="flex flex-col gap-4 w-10/12 mx-auto my-8">
      {filterReadList.map((book) => (
        <div key={book.bookId} className="flex gap-6 border rounded-2xl p-4 items-center">
          {/* Image */}
          <div className="bg-gray-100 rounded-xl p-4 w-36 h-36 flex items-center justify-center shrink-0">
            <img src={book.image} alt={book.bookName} className="h-full object-contain" />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl font-bold">{book.bookName}</h2>
            <p className="text-gray-500 text-sm">By : {book.author}</p>

            {/* Tags + Year */}
            <div className="flex items-center gap-3 flex-wrap text-sm">
              <span className="font-semibold">Tag</span>
              {book.tags.map((tag, i) => (
                <span key={i} className="text-green-500 font-medium">#{tag}</span>
              ))}
              <span className="ml-auto text-gray-500 flex items-center gap-1">
                📍 Year of Publishing: {book.yearOfPublishing}
              </span>
            </div>

            {/* Publisher + Pages */}
            <div className="flex gap-6 text-sm text-gray-500">
              <span>👤 Publisher: {book.publisher}</span>
              <span>📄 Page {book.totalPages}</span>
            </div>

            <hr />

            {/* Category + Rating + Button */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm">
                Category: {book.category}
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">
                Rating: {book.rating}
              </span>
              <button className="ml-auto bg-green-500 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;