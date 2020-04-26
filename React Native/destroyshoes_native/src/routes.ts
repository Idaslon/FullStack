import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Cart,
      Main,
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
        headerBackTitleVisible: false,
        // headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#191920',
        },
        // headerTintColor: '#7f2ed0',
      },
    }
  )
);

export default Routes;
