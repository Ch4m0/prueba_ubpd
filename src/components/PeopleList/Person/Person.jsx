import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal/Modal";
import "./person.styles.scss";

const Person = ({ name, subtitle, description, img, bgColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div>
        <img className="card__avatar" src={img} alt="avatar" />
      </div>
      <div>
        <h3 className="card__title">{name}</h3>
        <span className="card__subtitle">{subtitle}</span>
        <p className="card__description">{description}</p>
        <span className="card--showMore" onClick={openModal}>
          Conoce más
          <div className="card--showMoreArrowLeft"></div>
        </span>
      </div>

      {/* Modal */}

      {isModalOpen && (
        <Modal
          onCloseModal={closeModal}
          subtitle={subtitle}
          description={description}
        />
      )}
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Person;
