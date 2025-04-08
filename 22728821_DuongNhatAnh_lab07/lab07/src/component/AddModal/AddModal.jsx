import React, { useState } from "react";
import "./AddModal.css";

const AddModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    value: "",
    status: "New",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://67f4f397913986b16fa27eb8.mockapi.io/customers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("đã thêm thành công!");
        onClose();
      } else {
        alert("thêm thất bại.");
      }
    } catch (err) {
      console.error(err);
      alert("lỗi khác.");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />

          <label>Company</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <label>Order Value</label>
          <input name="value" value={formData.value} onChange={handleChange} />

          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option>New</option>
            <option>In-progress</option>
            <option>Completed</option>
          </select>

          <div className="modal-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
