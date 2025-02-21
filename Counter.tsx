import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Counter = ({ onPassValue }) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0);
    };

    const handlePassValue = () => {
        onPassValue(name || "Anonymous", count);
    };

    return (
        <View>
            <Text>{count}</Text>
            <Button title="INCREMENT" onPress={handleIncrement} />
            <Button title="DECREMENT" onPress={handleDecrement} />
            <Button title="PASS VALUE" onPress={handlePassValue} />
            <TextInput
                placeholder="Masukkan Nama"
                value={name}
                onChangeText={setName}
            />
        </View>
    );
};

export default Counter;
