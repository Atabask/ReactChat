import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { App } from "./components/index"
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
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


