import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import React from 'react';

export default function UserProfile() {
    const dummyData = [
        { "id": "1", "name": "Aarav Mehta", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/men/1.jpg" },
        { "id": "2", "name": "Saanvi Sharma", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/2.jpg" },
        { "id": "3", "name": "Vivaan Singh", "age": 27, "dpUrl": "https://randomuser.me/api/portraits/men/3.jpg" },
        { "id": "4", "name": "Anaya Reddy", "age": 22, "dpUrl": "https://randomuser.me/api/portraits/women/4.jpg" },
        { "id": "5", "name": "Reyansh Desai", "age": 30, "dpUrl": "https://randomuser.me/api/portraits/men/5.jpg" },
        { "id": "6", "name": "Ira Verma", "age": 23, "dpUrl": "https://randomuser.me/api/portraits/women/6.jpg" },
        { "id": "7", "name": "Kabir Patel", "age": 26, "dpUrl": "https://randomuser.me/api/portraits/men/7.jpg" },
        { "id": "8", "name": "Aadhya Nair", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/women/8.jpg" },
        { "id": "9", "name": "Rudra Kapoor", "age": 29, "dpUrl": "https://randomuser.me/api/portraits/men/9.jpg" },
        { "id": "10", "name": "Myra Bhatia", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/10.jpg" },
        { "id": "11", "name": "Neil Chatterjee", "age": 28, "dpUrl": "https://randomuser.me/api/portraits/men/11.jpg" },
        { "id": "12", "name": "Kiara Malhotra", "age": 22, "dpUrl": "https://randomuser.me/api/portraits/women/12.jpg" },
        { "id": "13", "name": "Devansh Joshi", "age": 27, "dpUrl": "https://randomuser.me/api/portraits/men/13.jpg" },
        { "id": "14", "name": "Riya Iyer", "age": 23, "dpUrl": "https://randomuser.me/api/portraits/women/14.jpg" },
        { "id": "15", "name": "Krish Arora", "age": 26, "dpUrl": "https://randomuser.me/api/portraits/men/15.jpg" },
        { "id": "16", "name": "Avni Pillai", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/16.jpg" },
        { "id": "17", "name": "Ishaan Goyal", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/men/17.jpg" },
        { "id": "18", "name": "Nisha Rao", "age": 28, "dpUrl": "https://randomuser.me/api/portraits/women/18.jpg" },
        { "id": "19", "name": "Yash Thakur", "age": 29, "dpUrl": "https://randomuser.me/api/portraits/men/19.jpg" },
        { "id": "20", "name": "Tanya Jain", "age": 22, "dpUrl": "https://randomuser.me/api/portraits/women/20.jpg" },
        { "id": "21", "name": "Ayaan Sinha", "age": 26, "dpUrl": "https://randomuser.me/api/portraits/men/21.jpg" },
        { "id": "22", "name": "Meera Khanna", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/women/22.jpg" },
        { "id": "23", "name": "Siddharth Bhatt", "age": 28, "dpUrl": "https://randomuser.me/api/portraits/men/23.jpg" },
        { "id": "24", "name": "Nikita Kaul", "age": 27, "dpUrl": "https://randomuser.me/api/portraits/women/24.jpg" },
        { "id": "25", "name": "Laksh Tiwari", "age": 30, "dpUrl": "https://randomuser.me/api/portraits/men/25.jpg" },
        { "id": "26", "name": "Simran Das", "age": 21, "dpUrl": "https://randomuser.me/api/portraits/women/26.jpg" },
        { "id": "27", "name": "Harshvardhan Seth", "age": 29, "dpUrl": "https://randomuser.me/api/portraits/men/27.jpg" },
        { "id": "28", "name": "Pooja Chauhan", "age": 23, "dpUrl": "https://randomuser.me/api/portraits/women/28.jpg" },
        { "id": "29", "name": "Shaurya Dey", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/men/29.jpg" },
        { "id": "30", "name": "Swara Naik", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/30.jpg" },
        { "id": "31", "name": "Dhruv Mishra", "age": 28, "dpUrl": "https://randomuser.me/api/portraits/men/31.jpg" },
        { "id": "32", "name": "Aishwarya Anand", "age": 26, "dpUrl": "https://randomuser.me/api/portraits/women/32.jpg" },
        { "id": "33", "name": "Parth Jha", "age": 27, "dpUrl": "https://randomuser.me/api/portraits/men/33.jpg" },
        { "id": "34", "name": "Neha Roy", "age": 22, "dpUrl": "https://randomuser.me/api/portraits/women/34.jpg" },
        { "id": "35", "name": "Aman Bansal", "age": 29, "dpUrl": "https://randomuser.me/api/portraits/men/35.jpg" },
        { "id": "36", "name": "Shruti Kaur", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/36.jpg" },
        { "id": "37", "name": "Ritik Saxena", "age": 23, "dpUrl": "https://randomuser.me/api/portraits/men/37.jpg" },
        { "id": "38", "name": "Jhanvi Prasad", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/women/38.jpg" },
        { "id": "39", "name": "Pranav Nanda", "age": 27, "dpUrl": "https://randomuser.me/api/portraits/men/39.jpg" },
        { "id": "40", "name": "Ritika Kohli", "age": 26, "dpUrl": "https://randomuser.me/api/portraits/women/40.jpg" },
        { "id": "41", "name": "Manan Rawat", "age": 28, "dpUrl": "https://randomuser.me/api/portraits/men/41.jpg" },
        { "id": "42", "name": "Karishma Dugar", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/42.jpg" },
        { "id": "43", "name": "Avi Chauhan", "age": 23, "dpUrl": "https://randomuser.me/api/portraits/men/43.jpg" },
        { "id": "44", "name": "Trisha Lal", "age": 22, "dpUrl": "https://randomuser.me/api/portraits/women/44.jpg" },
        { "id": "45", "name": "Veer Mathur", "age": 26, "dpUrl": "https://randomuser.me/api/portraits/men/45.jpg" },
        { "id": "46", "name": "Bhavya Sengupta", "age": 27, "dpUrl": "https://randomuser.me/api/portraits/women/46.jpg" },
        { "id": "47", "name": "Nikhil Menon", "age": 30, "dpUrl": "https://randomuser.me/api/portraits/men/47.jpg" },
        { "id": "48", "name": "Divya Kulkarni", "age": 23, "dpUrl": "https://randomuser.me/api/portraits/women/48.jpg" },
        { "id": "49", "name": "Arav Saxena", "age": 25, "dpUrl": "https://randomuser.me/api/portraits/men/49.jpg" },
        { "id": "50", "name": "Ishita Dasgupta", "age": 24, "dpUrl": "https://randomuser.me/api/portraits/women/50.jpg" }
    ]

    // @ts-ignore
    const renderItem = ({ item }) => (
        <View style={styles.profileCardContainer}>
            <View style={styles.innerProfileCard}>
                <Image source={{ uri: item.dpUrl }} style={styles.displayPicture} />
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userAge}>{item.age} yrs</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navBar}>
                <Text style={styles.brandLogo}>NextMatch</Text>
            </View>

            <FlatList
                data={dummyData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                contentContainerStyle={styles.flatListContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dadada',
        flex: 1,
    },
    navBar: {
        padding: 15,
        backgroundColor: 'white',
    },
    brandLogo: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    flatListContent: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    profileCardContainer: {
        backgroundColor: 'pink',
        borderRadius: 30,
        padding: 15,
        width: 350,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerProfileCard: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    displayPicture: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    userInfoContainer: {
        alignItems: 'center',
        gap: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: 'pink',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        textAlign: 'center',
    },
    userAge: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemSeparator: {
        height: 20,
    },
});
