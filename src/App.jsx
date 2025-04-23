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

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 text-blue-600">📚 Ứng dụng Quản lý Sách</h1>
      <AddBook onAdd={handleAddBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
