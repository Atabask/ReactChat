import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './components/route';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ProfilePage, ChatPage, HomePage, Page404, GistsPage, SignUpPage } from './pages';
import { HeaderComponent } from './components/HeaderChat';
import { store, persistor } from './store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './api/firebase';

import "./main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#5120B3",
    }
  }
})

const App = () => {
  const [session, setSession] =  useState(null)

  const isAuth = !!session

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setSession(user)
      } else {
        setSession(null)
      }
    })
  }, [])


  return  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <ThemeProvider theme={mainTheme} >
      <BrowserRouter>
        <HeaderComponent session={session} />
        <Routes>
          <Route path="/profile" element={<PrivateRoute isAuth={isAuth}><ProfilePage /></PrivateRoute>} />
          <Route path="/sign-up" element={<PublicRoute><SignUpPage/></PublicRoute>} />
          <Route path="/chat/*" element={<PrivateRoute isAuth={isAuth}><ChatPage /></PrivateRoute>} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/gists" element={<PrivateRoute isAuth={isAuth}><GistsPage /></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </PersistGate>
</Provider>
}

root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);


