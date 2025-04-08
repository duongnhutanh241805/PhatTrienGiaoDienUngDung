import React from "react";
import "./EditModal.css";

const EditModal = ({ customer, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Customer</h2>
        <form>
          <label>Name</label>
          <input type="text" defaultValue={customer.name} />

          <label>Company</label>
          <input type="text" defaultValue={customer.company} />

          <label>Order Value</label>
          <input type="text" defaultValue={customer.value} />

          <label>Status</label>
          <select defaultValue={customer.status}>
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
