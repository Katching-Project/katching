import { StyleSheet } from "react-native";

export const basicStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerPosition: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    ...this.centerPosition,
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: "20%",
    fontFamily: "Georgia",
  },
  inputContainer: {
    width: "80%",
    height: "6%",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 15,
    fontSize: 18,
    color: "black",
    fontFamily: "Georgia",
  },
  swipeArea: {
    position: "absolute",
    bottom: 0, // Position at the bottom of the screen
    left: 0,
    right: 0,
    height: "30%",
    justifyContent: "flex-end", // Set swiping area to the end of the screen
    alignItems: "center",
    paddingVertical: "10%",
  },
  swipeText: {
    fontSize: 20,
    fontFamily: "Georgia",
  },
});
