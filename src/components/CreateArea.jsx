
import React from "react";
import { useState } from 'react';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;//ie e.target.name e.target.value
    setNote(prevNote => {
      return {//so return a new object with prevNote and new name and value
        ...prevNote, // puts key value pairs from useState above
        [name]: value
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note);//this value is passed on to function addNote in App
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();

  }

  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>{/*pass the above i.e note created to app*/}
      </form>
    </div>
  );
}

export default CreateArea;