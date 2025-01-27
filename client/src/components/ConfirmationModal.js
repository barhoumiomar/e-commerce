// src/components/ConfirmationModal.js
import React from "react";
import "./ConfirmationModal.css"; // Add styles for modal

const ConfirmationModal = ({ product, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Confirm Add to Cart</h3>
        <p>Do you want to add <strong>{product.name}</strong> to your cart?</p>
        <div className="modal-actions">
          <button className="confirm-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="cancel-button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
