import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>HOME</Text>
            <Button title='Go to UserProfile' onPress={() => navigation.navigate("UserProfile")} />
        </SafeAreaView>
    )
}

export default Profile