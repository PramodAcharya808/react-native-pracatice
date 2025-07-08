import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {
    const [text, setText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleOnSubmit = () => {
        setSubmittedText(text);
        setText('');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeLine}>Welcome to NextMatch</Text>
            <TextInput
                placeholder='Enter UserName'
                placeholderTextColor={"grey"}
                value={text}
                style={styles.textInput}
                onChangeText={(c) => setText(c)}
                keyboardType='phone-pad'
            />
            <Button title='SUBMIT' onPress={handleOnSubmit} />

            <Text>{submittedText}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dadada",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },

    welcomeLine: {
        fontSize: 20
    },

    textInput: {
        borderWidth: 1,
        padding: 10,
        width: "80%",
        textAlign: "center",
    }
})

export default App