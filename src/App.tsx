import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Login from "./view/Login";
import Modal from "./components/Modal/Modal";
import { createContext, Dispatch, SetStateAction } from "react";
import { ErrorBoundary } from "react-error-boundary";
import MemberSignUp from "./view/MemberSignUp";
import LoginConfirmation from "./view/LoginConfirmation";

export type CurrentViewType = "login" | "loginConfirmation" | "signup";

interface ModalContextType {
  setModalContent: Dispatch<SetStateAction<React.ReactNode | undefined>>;
}
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>();
  const [currentView, setCurrentView] = useState<CurrentViewType>("login");

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleLoginClick = () => {
    setCurrentView("loginConfirmation");
    setShowModal(true);
  };

  const getModalTitle = (): string => {
    if (currentView === "login") {
      return "Login";
    } else if (currentView === "loginConfirmation") {
      return "Login Confirmation";
    } else if (currentView === "signup") {
      return "Become a member";
    }
    return "Modal";
  };

  return (
    <ModalContext.Provider value={{ setModalContent }}>
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <div className="App">
          {showModal && (
            <Modal title={getModalTitle()}>
              {currentView === "login" ? (
                <Login
                  onLogin={handleLoginClick}
                  onCancel={() => setShowModal(false)}
                  onSignup={() => setCurrentView("signup")}
                />
              ) : currentView === "loginConfirmation" ? (
                <LoginConfirmation onCancel={() => setShowModal(false)} />
              ) : (
                <>
                  <MemberSignUp onCancel={() => setShowModal(false)} />
                </>
              )}
            </Modal>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <button
                    type="button"
                    className="button"
                    onClick={handleClick}
                  >
                    Login to the dashboard
                  </button>
                </>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </ModalContext.Provider>
  );
}

export default App;
