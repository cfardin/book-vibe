import React from "react";

const BookCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="p-6 rounded-2xl border border-gray-200 bg-white w-xs">
      {/* book img */}
      <div className="bg-gray-100 rounded-xl flex items-center justify-center p-6 mb-4">
        <img src={image} alt={bookName} className="h-48 object-contain" />
      </div>

      {/* tags */}
      <div className="flex gap-2 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="badge badge-soft badge-success">
            {tag}
          </span>
        ))}
      </div>

      {/* title & author */}
      <div className="border-b border-dashed pb-4 mb-4">
        <h3 className="text-xl font-bold">{bookName}</h3>
        <p className="text-gray-500 mt-1">By : {author}</p>
      </div>

      {/* category & rating */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">{category}</span>
        <span className="flex items-center gap-1 text-gray-600">
          {rating} <span>⭐</span>
        </span>
      </div>
    </div>
  );
};

export default BookCard;
