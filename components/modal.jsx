import ReactModal from "react-modal";

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      overlayClassName="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 "
      className="p-4 bg-neutral-700 text-white rounded-lg shadow-md w-[75%]"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
