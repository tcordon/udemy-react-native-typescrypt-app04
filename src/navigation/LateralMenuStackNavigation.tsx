import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { globalStyles } from '../theme/appTheme';
import { BottomTabsStackNavigation } from './BottomTabsStackNavigation';

const Drawer = createDrawerNavigator();
const LeftDrawer = createDrawerNavigator();

export const LateralMenuStackNavigation = () => {
  const { width } = useWindowDimensions()

  return (
    <LeftDrawer.Navigator
      screenOptions={
        {
          drawerPosition: 'left' ,
          drawerType: width > 767 ? 'permanent' : 'front',
          headerShown: false
        }
      }
      drawerContent={ (props) => <MenuLeftDrawerContentBuilder {...props} /> }
      >
      <LeftDrawer.Screen options={{ title: 'Tabs' }} name="BottomTabsStackNavigation" component={BottomTabsStackNavigation} />
      <LeftDrawer.Screen options={{ title: 'Settings' }} name="SettingsScreen" component={SettingsScreen} />
    </LeftDrawer.Navigator>
  )
}

const MenuLeftDrawerContentBuilder = ( props: DrawerContentComponentProps ) => {
  const { navigation } = props
  return (
    <DrawerContentScrollView>
      {/* Parte del Avatar */}
      <View style={globalStyles.avatarContainer}>
        <Image
          style={globalStyles.avatar}
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YWATuEfE3CzY1tk1z6oCgQAAAA%26pid%3DApi&f=1&ipt=88d827428ddaf425fb80c4755ea78039f06cfa8e2c2fd2406e7e3ef8bb6c3478&ipo=images'
          }}
        />
      </View>

      {/* Opciones de Menu */}
      <View style={globalStyles.menuContainer}>
          { /* Opci??n 1 - Home / Screen 1 / Stack de Screens o Tabs */}
          <TouchableOpacity
            style={globalStyles.menuBoton}
            onPress={ () => { navigation.navigate('BottomTabsStackNavigation') }}
          >
            <Icon name='navigate' size={30} />
            <Text style={globalStyles.menuTexto} >Navegacion</Text>
          </TouchableOpacity>

          { /* Opci??n 2 - Settings */}
          <TouchableOpacity
            style={globalStyles.menuBoton}
            onPress={ () => { navigation.navigate('SettingsScreen') }}
          >
            <Icon name='settings' size={30} />
            <Text style={globalStyles.menuTexto}>Settings</Text>
          </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  )

}
export const LateralMenuStackNavigationRight = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false
        }}
      >
        <Drawer.Screen name="Pagina1Screen" component={Pagina1Screen} />
        <Drawer.Screen name="Pagina2Screen" component={Pagina2Screen} />
        <Drawer.Screen name="Pagina3Screen" component={Pagina3Screen} />
      </Drawer.Navigator>
    </>
  );
}