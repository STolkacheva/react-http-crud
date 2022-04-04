import React from "react";
import InputForm from "./InputForm.js";
import UpdateForm from "./UpdateForm.js";
import NoteList from "./NoteList.js";
import { useState } from "react";
import { useEffect } from "react";

export default function NotesBlock() {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then((response) => response.json())
      .then((notes) => {
        setNoteList(notes);
      });
  };

  const postNotes = (item) => {
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: "POST",
      body: JSON.stringify({ content: item }),
    }).then(getNotes());
  };

  const deleteNote = (noteId) => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      getNotes();
    });
  };

  const addNote = (item) => {
    postNotes(item);
  };

  const updateNote = () => {
    getNotes();
  };

  return (
    <React.Fragment>
      <UpdateForm onUpdate={updateNote} />
      <NoteList list={noteList} onRemove={deleteNote} />
      <InputForm onAdd={addNote} />
    </React.Fragment>
  );
}
