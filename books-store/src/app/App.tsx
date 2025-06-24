import React from 'react';
import './styles';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers';

function App() {
  return (
    <div >
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
