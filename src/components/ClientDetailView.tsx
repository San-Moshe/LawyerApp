import React from 'react';
import { useParams } from 'react-router-dom';

interface Client {
  id: string;
  name: string;
  email: string;
}

interface ClientDetailViewProps {
  clients: Client[];
}

const ClientDetailView: React.FC<ClientDetailViewProps> = ({ clients }) => {
  const { clientId } = useParams<{ clientId: string }>();
  const client = clients.find(c => c.id === clientId);

  return client ? (
    <div>
      <h2>{client.name}</h2>
      <p>{client.email}</p>
      {/* Include CaseHistoryList component here */}
    </div>
  ) : (
    <p>Client not found.</p>
  );
};

export default ClientDetailView;
