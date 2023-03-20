import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import Context from './src/Context';
import NavigationMenu from './src/navigation/NavigationMenu';
import { store } from './src/store/configureStore';

function App() {
  const value = {};

  // questions
  // ete subcategoria chka categorian cuyc tam te che
  // loading dnem minchev backendic ga patasxany te 
  // skzbum product-i nkar chka heto arandzin get aneluc ka
  // nman productneri info-n 
  // history id
  // get all history
  // sections

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
