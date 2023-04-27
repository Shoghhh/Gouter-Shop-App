import * as React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BasketIcon, CatalogIcon, HomeIcon, ProfileIcon, ShopsIcon } from './components/NavigationMenuSvgs';
import TabBarIcon from './components/TabBarIcon';
import { ProfileNavigator } from './ProfileNavigator';
import { CatalogNavigator } from './CatalogNavigator';
import { HomeNavigator } from './HomeNavigator';
import { BasketNavigator } from './BasketNavigator';
import ShopsScreen from '../screens/shops/ShopsScreen';
import { checkToken } from '../store/actions/saveToken';
import { useDispatch } from 'react-redux';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function NavigationMenu() {
  const dispatch = useDispatch()

  React.useEffect(()=> {
    dispatch(checkToken())
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
        // detachInactiveScreens={true}
        screenOptions={({ route }) => ({
          // unmountOnBlur:true,
          tabBarShowLabel: false,
          tabBarStyle: (() => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'DeliveryAddressScreen') {
              return {
                display: 'none',
              };
            }
            return { height: 90, borderTopWidth: 2, borderColor: '#868686' };
          })(route),
        })}
        backBehavior={'initialRoute'}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text={'Главная'} Icon={HomeIcon} />
            ),
          }}
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
