import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ClientProfileList from '../components/ClientProfileList';
import ClientProfileForm from '../components/ClientProfileForm';
import { fetchClients, addClient } from '../services/clientService';

// Define the type for a client
interface Client {
  id: string;
  name: string;
  email: string;
}

const ClientManagement = () => {
  const queryClient = useQueryClient();

  // Fetch clients with proper typing
  const { data: clients = [], isLoading, error } = useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  // Define mutation with proper typing
  const mutation = useMutation({
    mutationFn: addClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
  });

  const handleSaveClient = (client: Client) => {
    mutation.mutate(client);
  };

  if (isLoading) return <div>Loading clients...</div>;
  if (error) return <div>Error loading clients: {error.message}</div>;

  return (
    <div>
      <h1>Client Management</h1>
      <ClientProfileForm onSave={handleSaveClient} />
      <ClientProfileList clients={clients} />
    </div>
  );
};

export default ClientManagement;
