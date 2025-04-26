import { useState } from "react";
import "./App.css";
import Login from "./view/Login";
import Modal from "./components/Modal/Modal";
import { createContext } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const ModalContext = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [currentView, setCurrentView] = useState("login");

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleLoginClick = () => {
    setCurrentView("loginConfirmation");
    setShowModal(true);
  };

  const getModalTitle = () => {
    if (currentView === "login") {
      return "Login";
    } else if (currentView === "loginConfirmation") {
      return "Login Confirmation";
    }
  };

  return (
    <ModalContext.Provider
      value={{ setModalContent: (content) => setModalContent(content) }}
    >
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <div className="App">
          <button type="button" className="button" onClick={handleClick}>
            Login to the dashboard
          </button>
          {showModal && (
            <Modal title={getModalTitle()}>
              {currentView === "login" ? (
                <Login
                  onLogin={handleLoginClick}
                  onCancel={() => setShowModal(false)}
                />
              ) : (
                <>{modalContent}</>
              )}
            </Modal>
          )}
        </div>
      </ErrorBoundary>
    </ModalContext.Provider>
  );
}

export default App;
