import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'

import { AuthContext } from '../context/AuthContext'
import { globalStyles } from '../theme/appTheme'

export const ContactsScreen = () => {
  const { authState, signIn } = useContext(AuthContext)
  const { isLoggedIn } = authState

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>ContactsScreen</Text>
      { !isLoggedIn && <Button
        title="Sign In"
        onPress={signIn}
      />}
    </View>
  )
}
