import React, { useEffect, useRef, useState } from "react";
import IdolSelectCard from "../components/IdolSelectCard";

const idolList = [
  {
    name: "lesserafim",
    sourcePath: require("../assets/girl1.jpg"),
  },
  {
    name: "haerin",
    sourcePath: require("../assets/haerin.jpeg"),
  },
  {
    name: "minji",
    sourcePath: require("../assets/minji.jpeg"),
  },
];

export default function IdolSelect(props) {
  const isInitialMount = useRef(true);
  const [idolIndex, setIdolIndex] = useState(0);
  const [idolName, setIdolName] = useState();
  const [sourcePath, setSourcePath] = useState();
  const [selectedGroups, setSelectedGroups] = useState([]);

  const fetchData = () => {
    // Perform your data fetching or any other actions here
    // For example, fetch data from an API
    console.log("FetchData");
  };

  useEffect(() => {
    // Code to be executed after the component has been mounted
    fetchData(); // Call your function here
    const idolInfo = idolList.at(0);
    setIdolName("minji");
    setSourcePath(idolInfo.sourcePath);
  }, []); // Passing an empty dependency array ensures that this effect runs only once, after the initial render

  useEffect(() => {
    console.log(idolIndex);

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (idolIndex + 1 > idolList.length) {
        console.log("next page");
      } else {
        const idolInfo = idolList.at(idolIndex);
        setIdolName(idolInfo.name);
        setSourcePath(idolInfo.sourcePath);
        setSelectedGroups([...selectedGroups, idolIndex - 1]);
      }
    }
  }, [idolIndex]);

  useEffect(() => {
    console.log(selectedGroups);
  }, [selectedGroups]); // Log selectedGroups whenever it changes

  const handleRightSwipe = () => {
    // increment index of Idol group list.
    setIdolIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <IdolSelectCard
      index={idolIndex}
      idolName={idolName}
      sourcePath={sourcePath}
      onRightSwipe={handleRightSwipe}
    />
  );
}
