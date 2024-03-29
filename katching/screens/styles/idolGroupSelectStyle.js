import { StyleSheet } from "react-native";

export const idolGroupSelectStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
    padding: 10,
  },
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
    marginBottom: 20,
  },
  buttonContainer: {
    width: 90, // Adjust the width as needed
    height: 90, // Adjust the height as needed
    overflow: "hidden",
    backgroundColor: "red",
    borderRadius: 25,
  },
  imageBackground: {
    alignItems: "center" /* Vertically center */,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 25,
    backgroundColor: "blue",
  },
  buttonText: {
    marginBottom: "10%", // Adjust the percentage as needed
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonPressed: {
    ...StyleSheet.absoluteFillObject,
    // Apply shaded highlight styles here
    backgroundColor: "rgba(0, 0, 0, 0.5)", // For example, semi-transparent black background
    justifyContent: "center",
    alignItems: "center",
  },
  runKatchButton: {
    width: "80%",
    color: "white",
    backgroundColor: "#9A2AA4",
    borderRadius: 50,
  },
});
