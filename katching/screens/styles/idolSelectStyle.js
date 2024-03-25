import { StyleSheet } from "react-native";
import { basicStyles } from "./basicStyles";

export const idolSelectStyles = StyleSheet.create({
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
