import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { MainStackNavigation } from '../navigation/MainStackNavigation'

import { globalStyles } from '../theme/appTheme'
interface iProps extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: iProps) => {

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina1Screen</Text>
      <Button
        title="Navegar pagina 2"
        onPress={ () => navigation.navigate('Pagina2Screen')}
       />

       <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={globalStyles.botonGrande}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={globalStyles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.botonGrande}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={globalStyles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.botonGrande}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 3,
            nombre: 'Fernando'
          })}
        >
          <Text style={globalStyles.botonGrandeTexto}>Fernando</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
