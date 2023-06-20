import { ReactNode, useState } from "react";

import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close"onClick={closeModal}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
