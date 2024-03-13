import { View } from "react-native";
import IdolGroupCard from "../components/IdolGrooupCard";
import { idolGroupSelectStyles } from "./styles/idolGroupSelectStyle";

const idolGroups = [{
    "name": "lesserafim",
    "sourcePath": "../assets/lesserafim.jpg",
},
{
    "name": "lesserafim",
    "sourcePath": "../assets/lesserafim.jpg",
},
{
    "name": "lesserafim",
    "sourcePath": "../assets/lesserafim.jpg",
},
{
    "name": "lesserafim",
    "sourcePath": "../assets/lesserafim.jpg",
},
{
    "name": "lesserafim",
    "sourcePath": "../assets/lesserafim.jpg",
},
{
    "name": "lesserafim",
    "sourcePath": "../assets/lesserafim.jpg",
}];

export default function IdolGroupSelect() {
    return (
        <View style={idolGroupSelectStyles.container}>
            {idolGroups.map((idolGroup, index) => {
                return (<IdolGroupCard 
                            key={index}
                            name={idolGroup.name}
                            sourcePath={idolGroup.sourcePath}
                        />)
            })}
        </View>
    )
}