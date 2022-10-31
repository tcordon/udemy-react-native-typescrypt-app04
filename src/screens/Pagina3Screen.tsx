import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { globalStyles } from '../theme/appTheme'

interface iProps extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({ navigation }: iProps) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 3</Text>
      <Button
        title='Regresar'
        onPress={ () => navigation.pop() }
      />

      <Button
        title='Ir a pagina 1'
        onPress={ () => navigation.popToTop() }
      />
    </View>
  )
}
