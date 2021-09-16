import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface CoreButtonProps {
  label: string
  onPress?: () => void
  icon?: any
  loading?: boolean
  styleOverride?: ViewStyle
}

export default function CoreButton(props: CoreButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, props.styleOverride && props.styleOverride]}
      onPress={props.loading ? () => {} : props.onPress}
    >
      <Ionicons
        style={styles.buttonIconStyle}
        name={props.icon}
        size={24}
        color='white'
      />
      {props.loading ? (
        <ActivityIndicator size='small' color='white' />
      ) : (
        <Text style={styles.buttonTextStyle}>{props.label}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 6,
  },
  buttonTextStyle: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 34,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIconStyle: {
    position: 'absolute',
    right: 10,
  },
})
