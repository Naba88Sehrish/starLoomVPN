import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import {  Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPas from './components/Forgot-password';
import Servers from './components/servers';
import Pricing from './components/Pricing1';
import ResetPass from './components/ResetPassword';
import Download from './components/Download';
import FAQ from './components/FAQjs';
import Terms from './components/Terms and Conditions';
import VerificationCode from './components/VerifyCode';
import Support from './components/Support';
import Privacy from './components/PrivacyPolicy';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename={baseUrl}>
        
            <Routes>
                <Route path="/" element={<HomePage />}> </Route>
                <Route path="/Login" element={<Login />}> </Route>
                <Route path="/Privacy" element={< Privacy />}> </Route>
                <Route path="/Support" element={<Support />}> </Route>
                <Route path="/VerificationCode" element={<VerificationCode />}> </Route>
                <Route path="/Terms" element={<Terms />}> </Route>
                <Route path="/FAQ" element={< FAQ />}> </Route>
                <Route path="/Download" element={< Download />}> </Route>
                <Route path="/ResetPass" element={< ResetPass />}> </Route>
                <Route path="/Pricing" element={< Pricing />}> </Route>
                <Route path="/Signup" element={< Signup />}> </Route>
                <Route path="/ForgotPas" element={<ForgotPas />}> </Route>
                <Route path="/Servers" element={< Servers />}> </Route>
            </Routes>
       
  
  </BrowserRouter>);


serviceWorkerRegistration.unregister();


reportWebVitals();
