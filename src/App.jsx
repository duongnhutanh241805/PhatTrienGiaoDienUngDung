import { useState } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      genre: "Tâm lý",
      year: 1936,
    },
    {
      id: 2,
      title: "Tuổi trẻ đáng giá bao nhiêu",
      author: "Rosie Nguyễn",
      genre: "Văn học",
      year: 2016,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Lọc theo searchTerm (không phân biệt hoa thường)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 text-blue-600">📚 Ứng dụng Quản lý Sách</h1>

      {/* Ô tìm kiếm */}
      <div className="max-w-4xl mx-auto p-4">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên sách..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border rounded mb-4 shadow"
        />
      </div>

      <AddBook onAdd={handleAddBook} />
      <BookList books={filteredBooks} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;
