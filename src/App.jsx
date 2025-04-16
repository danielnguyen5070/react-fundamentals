import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Dashboard = () => <h1 className="text-3xl font-semibold">Dashboard</h1>;
const Users = () => <h1 className="text-3xl font-semibold">Users</h1>;
const Settings = () => <h1 className="text-3xl font-semibold">Settings</h1>;

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="ml-64 p-6 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users/list" element={<div>List Users 1</div>} />
            <Route path="/users/add" element={<div>Add User</div>} />
            <Route path="/settings/profile" element={<div>Profile</div>} />
            <Route path="/settings/preferences" element={<div>Preferences</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
