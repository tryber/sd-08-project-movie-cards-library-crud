import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <div>test</div>
    </BrowserRouter>
  );
}

export default App;
