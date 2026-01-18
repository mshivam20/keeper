import React from "react";
import notes from "./notes";



function Note(){
    return <div className="note">
       {notes.map((note)  =>(
         <div key={note.key} className="notes">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
))}
    </div>
}

export default Note;