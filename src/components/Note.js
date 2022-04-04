import React from "react";
import PropTypes from "prop-types";

export default function Note({ note, handleRemove }) {
  return (
    <div className="node_item">
      <div className="item_value">{note.content}</div>
      <button className="remove_btn" onClick={() => handleRemove(note.id)}>
        ×
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object,
  handleRemove: PropTypes.func.isRequired,
};
