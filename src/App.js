import { useState } from 'react';
import './App.css';
import Login from './view/Login';
import Modal from './components/Modal/Modal';
import LoginConfirmation from './view/LoginConfirmation';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentView, setCurrentView] = useState("login")

  const handleClick = () => {
    setShowModal(!showModal)
  }

  const handleLoginClick = () => {
    setCurrentView("loginConfirmation")
  }

  const getModalTitle = () => {
    if (currentView === "login") {
      return "Login"
    } else if (currentView === "loginConfirmation") {
      return "Login Confirmation"
    }
  }

  return (
    <div className="App">
      <button type='button' className='button' onClick={handleClick}>Login to the dashboard</button>
      {showModal && <Modal title={getModalTitle()}>
        {currentView === "login" && <Login onLogin={handleLoginClick} onCancel={() => setShowModal(false)} />}
        {currentView === "loginConfirmation" && <LoginConfirmation onCancel={() => {
          setCurrentView("login")
          setShowModal(false)
        }} />}
      </Modal>}
    </div>
  );
}

export default App;
