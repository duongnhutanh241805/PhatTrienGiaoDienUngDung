import { useState } from "react";

const AddBook = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre || !year) return alert("Nhập đầy đủ thông tin đi sếp ơi 😢");

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      year: parseInt(year),
    };
    onAdd(newBook);

    // Reset form
    setTitle("");
    setAuthor("");
    setGenre("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mb-6 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">➕ Thêm sách mới</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Tên sách"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tác giả"
          className="p-2 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Thể loại"
          className="p-2 border rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Năm xuất bản"
          className="p-2 border rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Thêm sách
      </button>
    </form>
  );
};

export default AddBook;
