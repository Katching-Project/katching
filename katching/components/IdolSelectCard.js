import { Image, Text, View } from "react-native";
import { idolSelectStyles } from "../screens/styles/idolSelectStyle";

export default function IdolSelectCard({ onRightSwipe, idolName, filePath }) {
  return (
    <View style={idolSelectStyles.verticalcontainer}>
      <View style={idolSelectStyles.idolNameContainer}>
        <Text style={idolSelectStyles.fontStyle}>{idolName}</Text>
      </View>
      <View style={{ height: "80%" }}>
        <Image source={{ uri: filePath }} style={idolSelectStyles.imageCard} />
      </View>
      <View style={idolSelectStyles.instructionContainer}>
        <Text style={idolSelectStyles.fontStyle}>
          Skip Swipes and Include All Members
        </Text>
      </View>
    </View>
  );
}
