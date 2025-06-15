import React from "react";
import "./Modal.css";

// one more way
// interface ModaPropsType extends React.PropsWithChildren {
//   title: string
// }
interface ModalProps {
  title: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ title, children }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
