// components/BookItem.jsx
import React from "react";

const BookItem = ({ book, onDelete }) => {
  return (
    <div className="max-w-4xl mx-auto mb-6 p-4 flex justify-between items-center p-4 border-b-2 border-gray-200 hover:bg-gray-100 transition duration-200">
      <div>
        <h3 className="font-semibold text-lg text-blue-600">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author} - {book.genre} - {book.year}</p>
      </div>
      <button
        onClick={() => onDelete(book.id)}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Xoá
      </button>
    </div>
  );
};

export default BookItem;
