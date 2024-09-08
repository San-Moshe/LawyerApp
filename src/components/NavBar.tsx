import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/clients" className="text-white">Client Management</Link>
        </li>
        <li>
          <Link to="/cases" className="text-white">Case Management</Link>
        </li>
        <li>
          <Link to="/billing" className="text-white">Billing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
