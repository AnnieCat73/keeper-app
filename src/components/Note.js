import React from 'react'


function Note(props) {

  function handleClick() {//Step 2//onDelete passed from parent and will trigger deleteNote(id) function in app
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Note