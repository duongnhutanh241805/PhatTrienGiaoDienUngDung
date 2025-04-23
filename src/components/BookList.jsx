import React from "react";

const BookList = ({ books }) => {

        return (
          <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">📖 Danh sách sách</h2>
            <table className="w-full border-collapse shadow-md rounded-md overflow-hidden">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-3 text-left">Tên sách</th>
                  <th className="p-3 text-left">Tác giả</th>
                  <th className="p-3 text-left">Thể loại</th>
                  <th className="p-3 text-left">Năm</th>
                  <th className="p-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id} className="even:bg-gray-100">
                    <td className="p-3">{book.title}</td>
                    <td className="p-3">{book.author}</td>
                    <td className="p-3">{book.genre}</td>
                    <td className="p-3">{book.year}</td>
                    <td className="p-3 text-center">
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };

export default BookList;