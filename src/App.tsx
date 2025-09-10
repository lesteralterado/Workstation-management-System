import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaTachometerAlt, FaDesktop, FaUser, FaCog } from "react-icons/fa";
import logo from "./assets/sos-logo.png"; // Add a logo image in assets folder
import Dashboard from "./components/Dashboard/Dashboard";
import Workstations from "./components/Workstations/Workstations";
import Account from "./components/Account/Account";
import User from "./components/User/User";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-gray-800 text-white flex flex-col p-4">
          <div className="flex items-center space-x-2 pb-4 border-b border-gray-700">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </div>
          <ul className="flex-1 space-y-4 mt-4">
            <li>
              <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaTachometerAlt /> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/workstations" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaDesktop /> <span>Workstations</span>
              </Link>
            </li>
            <li>
              <Link to="/account" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaCog /> <span>Account</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaUser /> <span>User</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workstations" element={<Workstations />} />
            <Route path="/account" element={<Account />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
