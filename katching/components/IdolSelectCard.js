import { Image, Text, TouchableOpacity, View } from "react-native";
import { idolSelectStyles } from "../screens/styles/idolSelectStyle";

export default function IdolSelectCard({ onRightSwipe, idolName, sourcePath }) {
  return (
    <View style={idolSelectStyles.container}>
      <View style={idolSelectStyles.idolNameContainer}>
        <Text style={idolSelectStyles.fontStyle}>{idolName}</Text>
      </View>
      <TouchableOpacity onPress={onRightSwipe}>
        <Image source={sourcePath} style={idolSelectStyles.imageCard} />
      </TouchableOpacity>
      <View style={idolSelectStyles.instructionContainer}>
        <Text style={idolSelectStyles.fontStyle}>
          Skip Swipes and Include All Members
        </Text>
      </View>
    </View>
  );
}
