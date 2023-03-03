import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import CatalogScreen from '../screens/catalog/CatalogScreen';
import CategoryScreen from '../screens/catalog/CategoryScreen';
import ProductScreen from '../screens/catalog/ProductScreen';
import ProductSearchScreen from '../screens/catalog/ProductSearchScreen';
import ProductReviewsScreen from '../screens/catalog/ProductReviewsScreen';
import LeaveAReviewAboutScreen from '../screens/home/reviews/LeaveAReviewAboutScreen';
import LeaveAReviewScreen from '../screens/home/reviews/LeaveAReviewScreen';
import BasketScreen from '../screens/basket/BasketScreen';
import OrderingScreen from '../screens/basket/OrderingScreen';

const Stack = createNativeStackNavigator();

export const BasketNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'BasketScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="BasketScreen"
                component={BasketScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Корзина'} />
                    ),
                })}
            />
            <Stack.Screen
                name="OrderingScreen"
                component={OrderingScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Оформление заказа'} backIcon shareIcon />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};
