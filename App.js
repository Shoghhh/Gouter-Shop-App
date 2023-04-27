import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import NavigationMenu from './src/navigation/NavigationMenu';
import { store } from './src/store/configureStore';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
        <NavigationMenu />
    </Provider>
  );
}

export default App;
