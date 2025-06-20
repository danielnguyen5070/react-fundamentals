import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Typescript from './exercises/05.typescript';
import Styling from './exercises/06.styling';
import Forms from './exercises/07.forms';
import Inputs from './exercises/08.inputs';
import Errors from './exercises/09.errors';
import Arrays from './exercises/10.arrays';

const routes = [
  { path: "/typescript", element: <Typescript /> },
  { path: "/styling", element: <Styling /> },
  { path: "/forms", element: <Forms /> },
  { path: "/inputs", element: <Inputs /> },
  { path: "/errors", element: <Errors /> },
  { path: "/arrays", element: <Arrays /> },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex">
        <div style={{ display: sidebarOpen ? 'none' : 'block' }} >
          <Sidebar />
        </div>
        <main className={`p-6 flex-1 ${sidebarOpen ? 'ml-0' : 'ml-64'} transition-all duration-300 ease-in-out`}>
          <button
            className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;