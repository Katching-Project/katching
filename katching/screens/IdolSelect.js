import React, { useEffect, useRef, useState } from "react";
import { Animated, PanResponder } from "react-native";
import IdolSelectCard from "../components/IdolSelectCard";
import { idolSelectStyles } from "./styles/idolSelectStyle";

const SWIPE_THRESHOLD = -25;
const idolList = [
  {
    name: "lesserafim",
    filePath:
      "/Users/yuhyunchung/workplace/katching/katching/assets/lesserafim.jpg",
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

  // Gesture handling for vertical swiping
  const pan = useState(new Animated.ValueXY())[0];
  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dy: pan.x }, // Horizontal movement only
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx < SWIPE_THRESHOLD) {
          setIdolIndex((prevIndex) => prevIndex + 1);
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    })
  )[0];

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
      "/Users/yuhyunchung/workplace/katching/katching/assets/lesserafim.jpg"
    );
  }, []); // Passing an empty dependency array ensures that this effect runs only once, after the initial render

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setSelectedGroups([...selectedGroups, idolIndex - 1]);
      if (idolIndex > idolList.length - 1) {
        console.log("next page");
      } else {
        const idolInfo = idolList.at(idolIndex);
        setIdolName(idolInfo.name);
        setFilePath(idolInfo.filePath);
      }
    }
  }, [idolIndex]);

  useEffect(() => {
    console.log(selectedGroups);
  }, [selectedGroups]); // Log selectedGroups whenever it changes

  return (
    <Animated.View
      style={idolSelectStyles.container}
      {...panResponder.panHandlers}
    >
      <IdolSelectCard
        index={idolIndex}
        idolName={idolName}
        filePath={filePath}
      />
    </Animated.View>
  );
}
