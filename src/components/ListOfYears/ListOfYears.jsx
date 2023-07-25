import { useState } from "react";
import PropTypes from "prop-types";

import Year from "./Year/Year";
import "./listOfYears.scss";

const ListOfYears = ({ dataYears, onFetchPeople }) => {
  const [selectedYear, setSelectedYear] = useState(
    dataYears.length > 0 ? dataYears[0].id : null
  );

  const handleSelectedYear = (yearId) => {
    setSelectedYear(yearId);
    onFetchPeople(yearId);
  };

  return (
    <div className="list">
      {dataYears.map(({ id, year }) => (
        <Year
          year={year}
          isSelected={selectedYear === id}
          onClick={() => handleSelectedYear(id)}
          bgColor={id % 2 === 0 ? "blue-light" : "blue-dark"}
          key={`year_${id}`}
        />
      ))}
    </div>
  );
};

ListOfYears.propTypes = {
  dataYears: PropTypes.array,
  onFetchPeople: PropTypes.func,
};
export default ListOfYears;
