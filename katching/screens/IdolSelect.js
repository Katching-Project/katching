import React, { useEffect, useRef, useState } from "react";
import { Animated, PanResponder } from "react-native";
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

const SWIPE_THRESHOLD = -25;

export default function IdolSelect(props) {
  const isInitialMount = useRef(true);
  const selected = useRef(false);
  const [idolIndex, setIdolIndex] = useState(0);
  const [idolName, setIdolName] = useState();
  const [sourcePath, setSourcePath] = useState();
  const [selectedGroups, setSelectedGroups] = useState([]);

  const fetchData = () => {
    // Perform your data fetching or any other actions here
    // For example, fetch data from an API
    console.log("FetchData");
  };

  // Gesture handling for vertical swiping
  const pan = useState(new Animated.ValueXY())[0];
  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x }, // Horizontal movement only
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx < SWIPE_THRESHOLD) {
          selected.current = false;
          swipeLeft();
        } else if (gesture.dx > SWIPE_THRESHOLD) {
          selected.current = true;
          swipeRight();
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    })
  )[0];

  useEffect(() => {
    // Code to be executed after the component has been mounted
    fetchData(); // Call your function here
    const idolInfo = idolList.at(0);
    console.log("when it loads");
    setIdolName(idolInfo.name);
    setSourcePath(idolInfo.sourcePath);
  }, []); // Passing an empty dependency array ensures that this effect runs only once, after the initial render

  useEffect(() => {
    if (isInitialMount.current) {
      console.log("first idol index change");
      isInitialMount.current = false;
    } else {
      if (selected.current) {
        setSelectedGroups((prevSelectedGroups) => [
          ...prevSelectedGroups,
          idolIndex - 1,
        ]);
      }
      console.log(selectedGroups);
      console.log(selected.current);

      if (idolIndex + 1 > idolList.length) {
        console.log("next page");
      } else {
        console.log("end");
        console.log(idolIndex);
        const idolInfo = idolList.at(idolIndex);
        setIdolName(idolInfo.name);
        setSourcePath(idolInfo.sourcePath);

        // if (selected.current) {

        // }
      }
    }
  }, [idolIndex]);

  const swipeLeft = () => {
    console.log("swipeLeft");
    setIdolIndex((prevIndex) => prevIndex + 1);
  };

  const swipeRight = () => {
    console.log("swipeRight");
    setIdolIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Animated.View {...panResponder.panHandlers}>
      <IdolSelectCard
        index={idolIndex}
        idolName={idolName}
        sourcePath={sourcePath}
      />
    </Animated.View>
  );
}
