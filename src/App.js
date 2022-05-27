import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
//import notes from './notes'
import CreateArea from './components/CreateArea'
import { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([]); //update notes array/a note goes into


  function addNote(newNote) {//receive the note/this note gets added to notes array above
    //console.log(note);//can log received note here i.e what typed
    setNotes(prevNotes => {//get hold of previous note/value
      return [...prevNotes, newNote];//to  add to this notes array then add new note at end

    })
  }

  function deleteNote(id) {//need the id of note to be deleted then this function then passed on <Note below as a property then passed to Note.jsx/the child- see onDelete below
    //remove a note from notes array
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {//prevNotes is an array
        return index !== id;
      })//so return all the notes where the index does not equal to the id that needs to be deleted. So should end up with an array that contains all the arrays other than the ones where the index matches the id of the note to be deleted. Id used for id for delete

    })

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}

      <Footer />
    </div>
  )
}

export default App