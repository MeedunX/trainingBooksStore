import React from 'react';
import './styles';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers';
import { Header } from '../widgets/header';

function App() {
  return (
    <div>
      
      <BrowserRouter>
          <Header/>
          <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
