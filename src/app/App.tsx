import React from 'react';
import './styles';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers';
import { Header } from '../widgets/header';
import { Provider } from 'react-redux';
import { store } from '../shared/lib/store/store';


function App() {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <AppRouter />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
