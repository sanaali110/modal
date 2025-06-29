import React, { JSX, useEffect, useState } from "react";

interface AlertProps {
  text: string;
}

const Alert: React.FC<AlertProps> = ({ text }): JSX.Element => {
  const [count, setCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 200);
  }, []);
  const onSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      <p>{text}</p>
      <p>{count}</p>
      <p>{isSubmitted ? "Submitted" : "Not Submitted"}</p>
      <button onClick={onSubmit}>OK</button>
      <button>Cancel</button>
    </div>
  );
};

export default Alert;
