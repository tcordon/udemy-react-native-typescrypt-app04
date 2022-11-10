import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { AuthContext } from '../context/AuthContext'

export const AlbumScreen = () => {
  const context = useContext(AuthContext)
  const { signOut, authState } = context
  const { isLoggedIn } = authState
  return (
    <View>
      <Text>AlbumScreen</Text>
      { isLoggedIn && <Button
        title='Log Out'
        onPress={signOut}
      />}
    </View>
  )
}
