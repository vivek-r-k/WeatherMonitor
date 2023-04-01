import React from "react";
import { Text,View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const All = () => {
    const navigation = useNavigation()
    return(
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <Text>From All</Text>
            <TouchableOpacity onPress={() => navigation.navigate('IndLocations')}>
                <Text>To individual data - SO ECE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default All