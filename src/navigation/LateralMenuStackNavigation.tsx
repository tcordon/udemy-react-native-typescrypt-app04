import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';

const Drawer = createDrawerNavigator();

export const LateralMenuStackNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pagina1Screen" component={Pagina1Screen} />
      <Drawer.Screen name="Pagina2Screen" component={Pagina2Screen} />
    </Drawer.Navigator>
  );
}