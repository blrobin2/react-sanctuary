import React, { useEffect, useState } from 'react';
import { compose } from 'sanctuary';
import { Nothing } from 'sanctuary-maybe';
import './App.css';

import { statusToView } from './status';
import { setStatusToButtons } from './button';

export const AppView = ({ status, setStatus, title }) => (
  <div className="App">
    <h1>{title}</h1>
    {setStatusToButtons(setStatus)}
    <h2>Click a button, see what happens:</h2>
    {statusToView(status)}
  </div>
);

// Accepts props, then passes along props and state to the view
// keeping the view agnostic on what is prop and what is state
const AppState = ({ title, setInitialStatus }) => {
  const [{ status }, setState] = useState({ status: Nothing });
  const setStatus = status => setState({ status });
  useEffect(() => {
    setInitialStatus(setStatus)
  }, [setInitialStatus])
  return { status, setStatus, title };
};

const App = compose(AppView)(AppState);

export default App;
