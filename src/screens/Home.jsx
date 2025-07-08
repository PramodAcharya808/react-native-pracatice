import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>HOME</Text>
            <Button title='Go to Profile' onPress={() => navigation.navigate("Profile")} />
        </SafeAreaView>
    )
}

export default Home