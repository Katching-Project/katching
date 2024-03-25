import { StyleSheet } from "react-native";
import { basicStyles } from "./basicStyles";

export const idolSelectStyles = StyleSheet.create({
  fontStyle: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
  verticalContainer: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(145, 63, 143)",
  },
  idolNameContainer: {
    ...basicStyles.centerPosition,
    height: "10%",
  },
  imageCard: {
    height: "100%",
    borderRadius: 54,
  },
  instructionContainer: {
    ...basicStyles.centerPosition,
    height: "10%",
  },
});
