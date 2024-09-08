import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/NavBar';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto p-4">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
