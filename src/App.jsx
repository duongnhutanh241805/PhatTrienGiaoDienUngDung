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
    {
      id: 3,
      title: "Vũ trụ trong vỏ hạt dẻ",
      author: "Stephen Hawking",
      genre: "Khoa học",
      year: 2001,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "Tất cả" || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const genres = ["Tất cả", "Văn học", "Khoa học", "Công nghệ", "Tâm lý"];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 text-blue-600">📚 Ứng dụng Quản lý Sách</h1>

      <div className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên sách..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full sm:w-2/3 p-3 border rounded shadow"
        />

        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-full sm:w-1/3 p-3 border rounded shadow"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <AddBook onAdd={handleAddBook} />
      <BookList books={filteredBooks} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;
