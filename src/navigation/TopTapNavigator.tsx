import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

import { AlbumScreen } from '../screens/AlbumScreen'
import { ChatScreen } from '../screens/ChatScreen'
import { ContactsScreen } from '../screens/ContactsScreen'

export const TopTapNavigator = () => {
  const { top:paddingTop } = useSafeAreaInsets()

  const TopTapNavigator = createMaterialTopTabNavigator()
  return (
    <TopTapNavigator.Navigator
      style={{
        paddingTop
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route:{name}, navigation}) => {
        return {
        tabBarIndicatorContainerStyle: {
          backgroundColor: 'blue',
          borderColor: 'red',
          borderWidth: 2
        },
        tabBarStyle: {
          paddingTop: 5
        },
        tabBarContentContainerStyle: {
          backgroundColor: 'cyan'
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarPressColor: 'yellow', // cyan + yellow = green
        tabBarIcon: ({ color, focused }) => {
          let iconName = ''
          switch(name) {
            case 'ChatScreen': iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'; break;
            case 'ContactsScreen': iconName = focused ? 'people' : 'people-outline'; break;
            case 'AlbumsScreen': iconName = focused ? 'images' : 'images-outline'; break;
            default: iconName = focused ? 'apps' : 'apps-outline'; break;
          }
          return <Icon name={iconName} color={color} size={20}/>
        }
      }}}
    >
      <TopTapNavigator.Screen name='ChatScreen' component={ChatScreen}/>
      <TopTapNavigator.Screen name='ContactsScreen' component={ContactsScreen}/>
      <TopTapNavigator.Screen name='AlbumsScreen' component={AlbumScreen}/>
    </TopTapNavigator.Navigator>
  )
}
