import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import Profile from './src/screens/Profile'
import UserProfile from './src/screens/UserProfile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeIcon from "react-native-vector-icons/AntDesign"
import UserIcon from "react-native-vector-icons/AntDesign"
import HistoryIcon from "react-native-vector-icons/MaterialIcons"


// const Stack = createStackNavigator()

// export const StackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Home' component={Home} />
//       <Stack.Screen name='Profile' component={Profile} />
//       <Stack.Screen name='UserProfile' component={UserProfile} />
//     </Stack.Navigator>
//   )
// }

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}
        options={
          {
            tabBarIcon: () => (
              <HomeIcon name="home" size={25} color="#900" />
            )
          }
        } />
      <Tab.Screen name='Profile' component={Profile}
        options={
          {
            tabBarIcon: () => (
              <UserIcon name="user" size={25} color="#900" />
            )
          }
        } />
      <Tab.Screen name='UserProfile' component={UserProfile}
        options={
          {
            tabBarIcon: () => (
              <HistoryIcon name="history" size={25} color="#900" />
            )
          }
        } />
    </Tab.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App