// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure().useReactNative().connect();

  tron.clear();

  console.tron = tron;
}
