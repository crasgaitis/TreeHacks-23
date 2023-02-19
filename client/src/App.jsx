import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Order from './pages/Order';
import Marketplace from './pages/Marketplace';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

import { createTheme, ThemeProvider } from '@mui/material';
import OrderCompleted from './pages/OrderCompleted';


const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans'
  },
  
  palette: {
    mode: 'dark',
  },
});

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/completion" element={<OrderCompleted />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
