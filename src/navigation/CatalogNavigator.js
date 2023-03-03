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

const Stack = createNativeStackNavigator();

export const CatalogNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'CatalogScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}

        >
            <Stack.Screen
                name="CatalogScreen"
                component={CatalogScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Каталог'} searchIcon onPressSearch={() => navigation.navigate('ProductSearchScreen')}/>
                    ),
                })}
            />
            <Stack.Screen
                name="CategoryScreen"
                component={CategoryScreen}
                options={({ navigation, route }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={route.params.title} searchIcon onPressSearch={() => navigation.navigate('ProductSearchScreen')} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
                options={({ navigation, route }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={''} shareIcon backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="ProductSearchScreen"
                component={ProductSearchScreen}
                options={({ navigation, route }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={''} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="ProductReviewsScreen"
                component={ProductReviewsScreen}
                options={({ navigation, route }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={''} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="LeaveAReviewScreen"
                component={LeaveAReviewScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Оставьте отзыв'} backIcon />
                    ),
                })}
            />

        </Stack.Navigator>
    );
};
