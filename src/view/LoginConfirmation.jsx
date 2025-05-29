import { useNavigate } from "react-router-dom";

const LoginConfirmation = ({ onCancel }) => {
  const navigate = useNavigate();
  
  const handleGoToDashboard = () => {
    onCancel();
    navigate("/dashboard");
    
  };

  return (
    <div>
      <p>You are logged in</p>
      <button className="button" onClick={handleGoToDashboard}>
        Go to dashboard
      </button>
    </div>
  );
};

export default LoginConfirmation;
