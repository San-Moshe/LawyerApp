import { Client } from "../models/client";

// Fetch clients from an API
export const fetchClients = async (): Promise<Client[]> => {
  const response = await fetch('/api/clients');
  if (!response.ok) {
    throw new Error('Error fetching clients');
  }
  return response.json();
};

// Add a new client
export const addClient = async (newClient: Client): Promise<void> => {
  const response = await fetch('/api/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newClient),
  });
  
  if (!response.ok) {
    throw new Error('Error adding client');
  }
};
