import React from 'react';
import { Link } from 'react-router-dom';
import { Client } from '../models/client';


interface ClientProfileListProps {
  clients: Client[];
}

const ClientProfileList: React.FC<ClientProfileListProps> = ({ clients }) => (
  <ul>
    {clients.map(client => (
      <li key={client.id}>
        <Link to={`/clients/${client.id}`}>{client.name}</Link>
      </li>
    ))}
  </ul>
);

export default ClientProfileList;
