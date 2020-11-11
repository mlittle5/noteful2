import React, { Component } from 'react';
import './notes.css'
import {Link } from 'react-router-dom';


class Notes extends Component {
    render() { 
        const notes = this.props.store.notes;

        return (
            <div>
                {notes.map(note => (
                    <div key={note.id}className='note'>
                        <Link to={`/note/${note.id}`}>
                    <h1>{note.name}</h1>
                    </Link>
                    <p>{note.modified}</p>
                    </div>
                ))}
            </div> 
         );
    }
}
 
export default Notes;