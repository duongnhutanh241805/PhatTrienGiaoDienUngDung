import React from "react";
import BookList from "./components/BookList";

function App() {
  const sampleBooks = [
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
  ];

  return (
    <div>
      <h1>📚 Ứng dụng Quản lý Sách</h1>
      <BookList books={sampleBooks} />
    </div>
  );
}

export default App;
