import PropTypes from "prop-types";
import Person from "./Person/Person";
import "./PeopleList.styles.scss";

const PeopleList = ({ data }) => {
  return (
    <>
      <h1 className="title">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
      </h1>
      {data.map((_person, index) => (
        <Person
          {..._person}
          key={_person.id}
          bgColor={(index + 1) % 2 === 0 && "#DBFBFF"}
        />
      ))}
    </>
  );
};

PeopleList.propTypes = {
  data: PropTypes.array,
};

export default PeopleList;
