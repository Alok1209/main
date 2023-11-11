import React, { useContext } from "react";
import { NoteContext } from "./Project";
function CreateNote() {
  const { Title, setTitle, note, setNote, addNote, setdialog } =
    useContext(NoteContext);
  return (
    <div className="container">
      <div className="tiles">
        <input
          type="text"
          placeholder="TITLE"
          value={Title.trimStart()}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          placeholder="write notes here"
          value={note.trimStart()}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button
          className="save-button"
          onClick={() => {
            addNote();
            setdialog(false);
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
export default CreateNote;
