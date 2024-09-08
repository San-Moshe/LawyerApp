import { Routes, Route } from "react-router-dom";
import Billing from "./components/Billing";
import CaseManagement from "./pages/CaseManagement";
import Home from "./pages/Home";
import ClientManagement from "./pages/ClientManagement";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/clients" element={<ClientManagement />} />
    <Route path="/cases" element={<CaseManagement />} />
    <Route path="/billing" element={<Billing />} />
  </Routes>
);

export default AppRoutes;
