import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { globalStyles } from '../theme/appTheme'
import { RouteStackParams } from '../navigation/MainStackNavigation'


// interface iRouteParams {
//  id: number,
//  nombre: string
// }
interface iProps extends StackScreenProps<RouteStackParams, 'PersonaScreen'>{}

export const PersonaScreen = (props: iProps) => {
  const { route, navigation } = props
  const params = route.params
  const persona = params.nombre

  useEffect(() => {
    navigation.setOptions({
      title: persona
    })
  }, [])

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Persona</Text>
    </View>
  )
}
