import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthContext } from '../context/AuthContext'

export const SettingsScreen = () => {
  const context = useContext( AuthContext )
  const { authState } = context

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(context,null,2)}</Text>
      { authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={150} color='red' />}
    </View>
  )
}
