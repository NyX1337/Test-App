import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='yellow'
        inactiveColor='white'
        barStyle={{ backgroundColor: 'blue' }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name='home' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Search'
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Ionicons name='search' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color }) => (
              <Ionicons name='notifications' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Ionicons name='settings' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  )
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  )
}

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications!</Text>
    </View>
  )
}

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
})
