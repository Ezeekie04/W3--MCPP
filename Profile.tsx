import React from "react";
import { View, Text } from "react-native";

const Profile = ({ name, age }) => {
    return (
        <View>
            <Text>Halo nama ku, {name}!</Text>
            <Text>Umur ku, {age} tahun</Text>
        </View>
    );
};

export default Profile;
