// src/App.js
import React, { useState } from 'react';
import Login from './login';
import ChatbotScreen from './chat';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <ChatbotScreen />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
