import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import Context from './src/Context';
import NavigationMenu from './src/navigation/NavigationMenu';
import { store } from './src/store/configureStore';
import { checkStatus } from './src/store/actions/saveStatus';

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
