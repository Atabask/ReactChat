import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProfilePage, ChatPage, HomePage, Page404, GistsPage } from './pages';
import { HeaderComponent } from './components/HeaderChat';
import { store, persistor } from './store';

import "./main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#5120B3",
    }
  }
})


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={mainTheme} >
          <BrowserRouter>
            <HeaderComponent />
            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Page404 />} />
              <Route path="/gists" element={<GistsPage />}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


// theme={mainTheme}   createTheme