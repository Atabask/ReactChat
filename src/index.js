import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfilePage, ChatPage, HomePage, Page404} from './pages';
import { HeaderComponent } from './components/HeaderChat';

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
    <ThemeProvider theme={mainTheme} >
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


// theme={mainTheme}   createTheme