import React, { useState } from 'react';

interface NoteFormProps {
  onSave: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave }) => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
