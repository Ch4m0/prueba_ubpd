import { useEffect, useState } from "react";
import ListOfYears from "./components/ListOfYears/ListOfYears";
import PeopleList from "./components/PeopleList/PeopleList";
import "./app.scss";

function App() {
  const [people, setPeople] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  const dataJsonPath = "/src/data.json";

  useEffect(() => {
    // Hacer la solicitud GET utilizando Fetch
    fetch(dataJsonPath) //  ruta al archivo data.json
      .then((response) => response.json())
      .then(({ data }) => {
        setPeople(data[0].people);
        setJsonData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFetchPeople = (idYear) => {
    const res = jsonData.find((item) => item.id === idYear);
    console.log(res.people);
    setPeople(res.people);
  };

  return (
    <div className="main">
      <ListOfYears dataYears={jsonData} onFetchPeople={handleFetchPeople} />
      <PeopleList data={people} />
    </div>
  );
}

export default App;
