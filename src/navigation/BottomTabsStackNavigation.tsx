import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Platform } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import { Tab1Screen } from '../screens/Tab1Screen';
import { MainStackNavigation } from './MainStackNavigation';
import { TopTapNavigator } from './TopTapNavigator';


export const BottomTabsStackNavigation = () => {
  return Platform.OS === 'ios'
    ? <BottomTabsStackNavigationIOS />
    : <BottomTabsStackNavigationAndroid />
}

const BottomTabNavigatorAndroid = createMaterialBottomTabNavigator();
const BottomTabsStackNavigationAndroid = () => {
  return (
    <BottomTabNavigatorAndroid.Navigator
      screenOptions={ ({route:{name}, navigation}) => {
        console.log(name)
        return {
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarColor: 'green',
          tabBarIcon: ({ color, focused}) => {
            let iconName = ''
            switch(name) {
              case 'Tab1Screen': iconName = focused ? 'chevron-back' : 'chevron-back-outline'; break;
              case 'TopTapNavigator': iconName = focused ? 'code' : 'code-outline'; break;
              case 'MainStackNavigation': iconName = focused ? 'chevron-forward' : 'chevron-forward-outline'; break;
              default: iconName = focused ? 'apps' : 'apps-outline'; break;
            }
            return (<Icon name={iconName} color={color} size={20}/>)
          }
        }
      }}
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: 'red'}}
    >
      <BottomTabNavigatorAndroid.Screen
        options={{ title: 'Tab Screen 1' }}
        name="Tab1Screen"
        component={Tab1Screen}
      />

      <BottomTabNavigatorAndroid.Screen
        options={{ title: 'Top Tav Navigator'}}
        name="TopTapNavigator"
        component={TopTapNavigator}
      />

      <BottomTabNavigatorAndroid.Screen
        options={{ title: 'Tab Screen 3'}}
        name="MainStackNavigation"
        component={MainStackNavigation}
      />

    </BottomTabNavigatorAndroid.Navigator>
  )
}

const BottomTabNavigatorIOS = createBottomTabNavigator();
const BottomTabsStackNavigationIOS = () => {
  return (
    <BottomTabNavigatorIOS.Navigator
      screenOptions={ ({route:{name}, navigation}) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: 'blue',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarIcon: ({ color, size, focused}) => {
            let iconName = ''
            switch(name) {
              case 'ChatScreen': iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'; break;
              case 'ContactsScreen': iconName = focused ? 'people' : 'people-outline'; break;
              case 'AlbumsScreen': iconName = focused ? 'images' : 'images-outline'; break;
              default: iconName = focused ? 'apps' : 'apps-outline'; break;
            }
            return (<Icon name={iconName} color={color} size={size}/>)
          }
        }
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <BottomTabNavigatorIOS.Screen
        options={{ title: 'Tab Screen 1' }}
        name="Tab1Screen"
        component={Tab1Screen}
      />

      <BottomTabNavigatorIOS.Screen
        options={{ title: 'Tab Screen 2'}}
        name="TopTapNavigator"
        component={TopTapNavigator}
      />

      <BottomTabNavigatorIOS.Screen
        options={{ title: 'Tab Screen 3'}}
        name="MainStackNavigation"
        component={MainStackNavigation}
      />

    </BottomTabNavigatorIOS.Navigator>
  )
}