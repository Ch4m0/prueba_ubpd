import "./modal.styles.scss";
import PropTypes from "prop-types";

const Modal = ({ subtitle, description, onCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        {/* Contenido del modal */}
        <button className="modal--close" onClick={onCloseModal}>
          Cerrar
        </button>
        <h2 className="modal__title">{subtitle}</h2>
        <p className="moda__description">{description}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default Modal;
