import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";

export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <Button 
                title="IdolGroupSelect"
                onPress={() => navigation.navigate("IdolGroupSelect")}
            />
        </View>
    )
}