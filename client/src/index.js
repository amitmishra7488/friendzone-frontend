import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './components/Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import { ContextAuth } from './context/Context.auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <ChakraProvider>
    <ContextAuth/>
    </ChakraProvider>
  </Provider>
  </BrowserRouter>
);


reportWebVitals();
