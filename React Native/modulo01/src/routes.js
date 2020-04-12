import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main';
import User from './User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7f2ed0',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
