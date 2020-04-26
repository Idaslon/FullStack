import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import appColors from './styles/appColors';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: appColors.dark,
        },
      },
    }
  )
);

export default Routes;
