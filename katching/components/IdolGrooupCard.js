import { Card } from '@rneui/themed';
import { Text } from "react-native";
import { idolGroupSelectStyles } from "../screens/styles/idolGroupSelectStyle";

export default function IdolGroupCard(props) {
    return (
        <Card.Image 
            source={require('../assets/lesserafim.jpg')}
            style={idolGroupSelectStyles.imageCard}
        >
            <Text>{props.name}</Text>
        </Card.Image>
    )
}