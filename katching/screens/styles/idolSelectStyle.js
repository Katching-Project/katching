import { StyleSheet } from "react-native";
import { basicStyles } from "./basicStyles";

export const idolSelectStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "rgb(145, 63, 143)",
  },
  fontStyle: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
  idolNameContainer: {
    ...basicStyles.centerPosition,
    height: "5%",
  },
  imageCard: {
    width: "100%",
    height: "100%",
    borderRadius: 54,
    height: "87%",
  },
  instructionContainer: {
    ...basicStyles.centerPosition,
    height: "8%",
  },
});
