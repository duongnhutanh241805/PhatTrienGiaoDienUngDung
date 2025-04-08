import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ customer, onClose }) => {
  const [formData, setFormData] = useState({
    name: customer.name,
    company: customer.company,
    value: customer.value,
    status: customer.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://67f4f397913986b16fa27eb8.mockapi.io/customers/${customer.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Đã sửa khách hàng!");
        onClose();
      } else {
        alert("Sửa thất bại.");
      }
    } catch (error) {
      console.error("Lỗi sửa dữ liệu:", error);
      alert("Lỗi gì đó xảy ra.");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Customer</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <label>Order Value</label>
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleChange}
          />

          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option>New</option>
            <option>In-progress</option>
            <option>Completed</option>
          </select>

          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
