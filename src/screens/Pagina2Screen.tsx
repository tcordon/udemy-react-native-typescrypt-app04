import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { globalStyles } from '../theme/appTheme'

export const Pagina2Screen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina2Screen</Text>
      <Button
        title="Navegar pagina 3"
        onPress={ () => navigation.navigate('Pagina3Screen')}
       />
    </View>
  )
}
