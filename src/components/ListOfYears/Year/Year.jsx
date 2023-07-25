import "./year.styles.scss";
import PropTypes from "prop-types";

const Year = ({ bgColor, year, isSelected, onClick }) => {
  console.log(bgColor);
  return (
    <button className={isSelected ? "active" : bgColor} onClick={onClick}>
      {year}
    </button>
  );
};

Year.propTypes = {
  bgColor: PropTypes.string,
  year: PropTypes.number,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Year;
