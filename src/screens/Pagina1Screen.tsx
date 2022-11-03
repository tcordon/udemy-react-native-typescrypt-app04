import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

import { globalStyles } from '../theme/appTheme'

interface iProps extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: iProps) => {

  const parent:DrawerNavigationProp<any, any, any> = navigation.getParent()
/*
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title='Menu'
          onPress={ () => parent.toggleDrawer()}
        />
      )
    })

  }, [])
*/

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina1Screen</Text>
      <Button
        title="Navegar pagina 2"
        onPress={ () => navigation.navigate('Pagina2Screen')}
       />

       <Text style={{
        marginVertical: 20,
        fontSize: 20
       }}>Navegar con argumentos:</Text>

       <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={globalStyles.botonGrande}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={globalStyles.botonGrandeTexto}><Icon name='people' /> Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.botonGrande}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={globalStyles.botonGrandeTexto}><Icon name='cloud-download' /> Maria</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.botonGrande}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 3,
            nombre: 'Fernando'
          })}
        >
          <Text style={globalStyles.botonGrandeTexto}><Icon name='earth' /> Fernando</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
