import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
    return(
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <Text>From Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>To individual data - SO ECE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('All')}>
                <Text>To all data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home