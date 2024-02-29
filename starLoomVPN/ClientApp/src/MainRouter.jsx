import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
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


function MainRouter() {
    return (
        <Router>
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
        </Router>
    );
}

export default MainRouter;
