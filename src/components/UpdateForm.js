import React from "react";
import PropTypes from "prop-types";

export default function UpdateForm({ onUpdate }) {
  const onUpdateNotes = (event) => {
    event.preventDefault();
    onUpdate();
  };

  return (
    <div className="update">
      <label className="update_title">Notes </label>
      <button className="update_btn" onClick={onUpdateNotes}>
        ↺
      </button>
    </div>
  );
}

UpdateForm.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};
