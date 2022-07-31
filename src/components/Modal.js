import ReactDOM from "react-dom";
import { MdCancel } from "react-icons/md";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "2rem",
  zIndex: 1000,
  maxWidth: "400px",
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "#00000090",
  zIndex: 1000,
};
const BTN_CLOSE = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: ".5rem",
  cursor: "pointer",
};
const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  //render a Portal React Modal
  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <div style={BTN_CLOSE} onClick={onClose}>
          <MdCancel onClick={onClose} />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
