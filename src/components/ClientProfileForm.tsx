import React, { useState } from 'react';
import { Client } from '../models/client';


interface ClientProfileFormProps {
  onSave: (client: Client) => void;
  client?: Client;
}

const ClientProfileForm: React.FC<ClientProfileFormProps> = ({ onSave, client }) => {
  const [formState, setFormState] = useState<Client>(client || { id: '', name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields based on `formState` */}
      <input
        name="name"
        value={formState.name || ''}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      {/* Add more fields as needed */}
      <button type="submit">Save</button>
    </form>
  );
};

export default ClientProfileForm;
