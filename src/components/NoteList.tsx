import React from 'react';

interface NoteListProps {
  notes: string[]; // Notes is an array of strings
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => (
  <div>
    <h3>Notes</h3>
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <p>{note}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default NoteList;
