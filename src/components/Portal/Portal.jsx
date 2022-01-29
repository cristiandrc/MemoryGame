import { createPortal } from "react-dom";
import "./portal.scss";
const Portal = ({ children }) => {
  return createPortal(
    <div className="portal-container">{children}</div>,
    document.getElementById("portal")
  );
};

export default Portal;
