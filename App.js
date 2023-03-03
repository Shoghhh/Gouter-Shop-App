import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import Context from './src/Context';
import NavigationMenu from './src/navigation/NavigationMenu';
import { store } from './src/store/configureStore';
import 'react-native-gesture-handler';

function App() {
  const value = {};

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <Context.Provider value={value}>
        <NavigationMenu />
      </Context.Provider>
    </Provider>
  );
}

export default App;
