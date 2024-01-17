import React, { useState } from 'react';
import './chat.css'; 

const ChatbotScreen = () => {
  const [department, setDepartment] = useState('marketing');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  
  return (
    <div className="chat-container">
      <div className="chat-box">
        <h2>Chatbot Screen</h2>
        <div>
          <label>Department:</label>
          <select value={department} onChange={handleDepartmentChange}>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div>
          <label>Chat:</label>
          <input
            type="text"
            placeholder={`Enter your ${department === 'sales' ? 'sales' : 'marketing'} query here...`}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotScreen;
