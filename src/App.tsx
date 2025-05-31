import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Typescript from './exercises/05.typescript';
import Styling from './exercises/06.styling'
import Forms from './exercises/07.forms'
import Input from './exercises/08.inputs'
import Errors from './exercises/09.errors'
import Arrays from './exercises/10.arrays'

const routes = [
  { path: "/typescript", element: <Typescript /> },
  { path: "/styling", element: <Styling /> },
  { path: "/forms", element: <Forms /> },
  { path: "/inputs", element: <Input /> },
  { path: "/errors", element: <Errors /> },
  { path: "/arrays", element: <Arrays /> },
];

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="ml-64 p-6 flex-1">
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
