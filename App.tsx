import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoverPage from './screens/CoverPage';
import HomeScreen from './screens/HomePage';
import Menu from './screens/MenuPage';
import Addmenu from './screens/Addmenu';

export type MenuItem = {
  name: string;
  price: number;
  course: string;
  description: string;
};

const Stack = createStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CoverPage">
        {/* Cover Page */}
        <Stack.Screen
          name="CoverPage"
          component={CoverPage}
          options={{ headerShown: false }}
        />
        {/* Home Page */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ menuItems }}
        />
        {/* Menu Page */}
        <Stack.Screen
          name="Menu"
          component={Menu}
          initialParams={{ menuItems }}
        />
        {/* Add Menu Page */}
        <Stack.Screen name="AddMenu">
          {(props) => <Addmenu {...props} addMenuItem={addMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
