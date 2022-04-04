import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import Note from "./Note";

export default function NoteList({ list, onRemove }) {
  const onRemoveItem = (id) => {
    onRemove(id);
  };

  return (
    <div className="node_list">
      {list.map((o) => (
        <Note note={o} handleRemove={onRemoveItem} key={uuid()} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func.isRequired,
};
