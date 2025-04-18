import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Typescript01 from './exercises/05.typescript/01.problem.props'
import Typescript02 from './exercises/05.typescript/02.problem.narrow'
import Typescript03 from './exercises/05.typescript/03.problem.derive'
import Typescript04 from './exercises/05.typescript/04.problem.default-props'
import Typescript05 from './exercises/05.typescript/05.problem.function-types'
import Typescript06 from './exercises/05.typescript/06.problem.satisfies'

import Styling01 from './exercises/06.styling/01.problem.style'
import Styling02 from './exercises/06.styling/02.problem.component'
import Styling03 from './exercises/06.styling/03.problem.size-prop'

import Forms01 from './exercises/07.forms/01.problem.form'
import Forms02 from './exercises/07.forms/02.problem.action'
import Forms03 from './exercises/07.forms/03.problem.types'
import Forms04 from './exercises/07.forms/04.problem.submit'
import Forms05 from './exercises/07.forms/05.problem.action'

import Input1 from './exercises/08.inputs/01.problem.checkbox'
import Input2 from './exercises/08.inputs/02.problem.select'
import Input3 from './exercises/08.inputs/03.problem.radio'
import Input4 from './exercises/08.inputs/04.problem.hidden'
import Input5 from './exercises/08.inputs/05.problem.default-value'

import Errors1 from './exercises/09.errors/01.problem.composition'
import Errors2 from './exercises/09.errors/02.problem.show-boundary'
import Errors3 from './exercises/09.errors/03.problem.reset'

import Arrays1 from './exercises/10.arrays/01.problem.key-prop'
import Arrays2 from './exercises/10.arrays/02.problem.focus-state'
import Arrays3 from './exercises/10.arrays/03.problem.key-reset'

const routes = [
  { path: "/typescript/props", element: <Typescript01 /> },
  { path: "/typescript/narrow", element: <Typescript02 /> },
  { path: "/typescript/derive", element: <Typescript03 /> },
  { path: "/typescript/default", element: <Typescript04 /> },
  { path: "/typescript/duplication", element: <Typescript05 /> },
  { path: "/typescript/satisfies", element: <Typescript06 /> },
  { path: "/styling/styling", element: <Styling01 /> },
  { path: "/styling/compenent", element: <Styling02 /> },
  { path: "/styling/size-prop", element: <Styling03 /> },
  { path: "/forms/form", element: <Forms01 /> },
  { path: "/forms/form-action", element: <Forms02 /> },
  { path: "/forms/input-types", element: <Forms03 /> },
  { path: "/forms/submissionx", element: <Forms04 /> },
  { path: "/forms/form-actions", element: <Forms05 /> },
  { path: "/inputs/checkbox", element: <Input1 /> },
  { path: "/inputs/select", element: <Input2 /> },
  { path: "/inputs/radios", element: <Input3 /> },
  { path: "/inputs/hidden-inputs", element: <Input4 /> },
  { path: "/inputs/default-value", element: <Input5 /> },
  { path: "/errors/composition", element: <Errors1 /> },
  { path: "/errors/other-errors", element: <Errors2 /> },
  { path: "/errors/reset", element: <Errors3 /> },
  { path: "/arrays/key-prop", element: <Arrays1 /> },
  { path: "/arrays/focus-state", element: <Arrays2 /> },
  { path: "/arrays/key-reset", element: <Arrays3 /> },
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
