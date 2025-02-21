import React, { useState } from "react";
import { View } from "react-native";
import Counter from "./Counter";
import Profile from "./Profile";

export default function App() {
    const [name, setName] = useState("Anonymous");
    const [age, setAge] = useState(0);

    const handlePassValue = (newName, newAge) => {
        setName(newName);
        setAge(newAge);
    };

    return (
        <View>
            <Profile name={name} age={age} />
            <Counter onPassValue={handlePassValue} />
        </View>
    );
}
