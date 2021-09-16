import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Button from '../Components/Button'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/bitcoin.jpg')}
          style={styles.logo}
          resizeMode='stretch'
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay Connected with Bitcoin!</Text>
        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: 30,
          }}
        >
          <Button label='Sign In' icon='arrow-forward-circle-outline' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const { height } = Dimensions.get('screen')
const height_logo = height * 0.3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'lightgreen',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },

  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
})
