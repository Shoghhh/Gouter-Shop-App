import * as React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BasketIcon, CatalogIcon, HomeIcon, ProfileIcon, ShopsIcon } from './components/NavigationMenuSvgs';
import TabBarIcon from './components/TabBarIcon';
import { ProfileNavigator } from './ProfileNavigator';
import Header from './components/Header';
import { CatalogNavigator } from './CatalogNavigator';
import { HomeNavigator } from './HomeNavigator';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../store/actions/saveStatus';
import { BasketNavigator } from './BasketNavigator';
import ShopsScreen from '../screens/shops/ShopsScreen';

const Tab = createBottomTabNavigator();

const PayScreenComponent = () => {
  return null;
};

export default function NavigationMenu() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(checkStatus())
  }, [])

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: { height: 90, borderTopWidth: 2, borderColor: '#868686' },
        })}
        backBehavior={'history'}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text={'Главная'} Icon={HomeIcon} />
            ),
          })}
        />
        <Tab.Screen
          name="Shops"
          component={ShopsScreen}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text={'Магазины'} Icon={ShopsIcon} />
            ),
          })}
        />
        <Tab.Screen
          name="Catalog"
          component={CatalogNavigator}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text={'Каталог'} Icon={CatalogIcon} />
            ),
          })}
        />
        <Tab.Screen
          name="Basket"
          component={BasketNavigator}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text={'Корзина'} Icon={BasketIcon} />
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text={'Профиль'} Icon={ProfileIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
