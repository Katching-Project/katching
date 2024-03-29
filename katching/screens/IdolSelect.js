import React, { useEffect, useRef, useState } from "react";
import IdolSelectCard from "../components/IdolSelectCard";

const idolList = [
  {
    name: "lesserafim",
    filePath: "/Users/yuhyunchung/workplace/katching/katching/assets/girl1.jpg",
  },
  {
    name: "haerin",
    filePath:
      "/Users/yuhyunchung/workplace/katching/katching/assets/haerin.jpeg",
  },
  {
    name: "minji",
    filePath:
      "/Users/yuhyunchung/workplace/katching/katching/assets/minji.jpeg",
  },
];

export default function IdolSelect(props) {
  const isInitialMount = useRef(true);
  const [idolIndex, setIdolIndex] = useState(0);
  const [idolName, setIdolName] = useState();
  const [filePath, setFilePath] = useState();
  const [selectedGroups, setSelectedGroups] = useState([]);

  const fetchData = () => {
    // Perform your data fetching or any other actions here
    // For example, fetch data from an API
    console.log("FetchData");
  };

  useEffect(() => {
    // Code to be executed after the component has been mounted
    fetchData(); // Call your function here
    setIdolName("minji");
    setFilePath(
      "/Users/yuhyunchung/workplace/katching/katching/assets/girl1.jpg"
    );
  }, []); // Passing an empty dependency array ensures that this effect runs only once, after the initial render

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const idolInfo = idolList.at(idolIndex);
      setIdolName(idolInfo.name);
      setFilePath(idolInfo.filePath);
      setSelectedGroups([...selectedGroups, idolIndex - 1]);
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
      filePath={filePath}
      onRightSwipe={handleRightSwipe}
    />
  );
}
