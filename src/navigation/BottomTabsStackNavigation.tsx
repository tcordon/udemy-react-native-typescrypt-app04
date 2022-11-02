import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';

const Tab = createBottomTabNavigator();

export const BottomTabsStackNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ title: 'Tab Screen 1'}} name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen options={{ title: 'Tab Screen 2'}} name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen options={{ title: 'Tab Screen 3'}} name="Tab3Screen" component={Tab3Screen} />

    </Tab.Navigator>
  )
}