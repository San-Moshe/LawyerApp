import React, { useState, FormEvent } from 'react';

interface CaseDetails {
  title: string;
  description: string;
}

interface CaseFormProps {
  caseDetails?: CaseDetails;  // Optional since it's coming from props
  onSave: (caseDetails: CaseDetails) => void;
}

const CaseForm: React.FC<CaseFormProps> = ({ caseDetails, onSave }) => {
  const [title, setTitle] = useState<string>(caseDetails?.title || '');
  const [description, setDescription] = useState<string>(caseDetails?.description || '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CaseForm;
