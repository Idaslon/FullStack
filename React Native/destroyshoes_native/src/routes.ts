import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
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
