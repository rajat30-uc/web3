import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import PasswordChecker from './pages/PasswordChecker';
import SecureFileUpload from './pages/SecureFileUpload';
import IPScanner from './pages/IPScanner';
import Quiz from './pages/Quiz';
import QuizResults from './pages/QuizResults';
import PhishingDetector from './pages/PhishingDetector';
import FeedbackForm from './FeedbackForm';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-strength" element={<PasswordChecker />} />
          <Route path="/file-upload" element={<SecureFileUpload />} />
          <Route path="/ip-scanner" element={<IPScanner />} />
          <Route path="/cybersecurity-quiz" element={<Quiz/>} />
          <Route path="/results" element={<QuizResults />} />
          <Route path="/phishing-detector" element={<PhishingDetector />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
