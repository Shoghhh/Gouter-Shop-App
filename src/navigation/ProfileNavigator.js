import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import Header from './components/Header';
import { LogoutIcon } from '../../assets/svgs/ProfileSvgs';
import { useSelector } from 'react-redux';
import AuthScreen from '../screens/profile/auth/AuthScreen';
import VerificationScreen from '../screens/profile/auth/VerificationScreen';
import ForgotPasswordScreen from '../screens/profile/auth/ForgotPasswordScreen';
import ForgotPasswordVerificationScreen from '../screens/profile/auth/ForgotPasswordVerificationScreen';
import NewPasswordScreen from '../screens/profile/auth/NewPasswordScreen';
import ForgotPasswordVerificationSuccessScreen from '../screens/profile/auth/ForgotPasswordVerificationSuccessScreen';
import AboutCompany from '../screens/profile/AboutCompany';
import PersonalInfoScreen from '../screens/profile/PersonalInfoScreen';
import PurchaseHistoryScreen from '../screens/profile/PurchaseHistoryScreen';
import { FavoritesScreen } from '../screens/profile/FavoritesScreen';
import ChangePasswordScreen from '../screens/profile/ChangePasswordScreen';
import ChangeEmailScreen from '../screens/profile/ChangeEmailScreen';
import EmailVerificationScreen from '../screens/profile/EmailVerificationScreen';
import EmailChangedSuccess from '../screens/profile/EmailChangedSuccess';

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    const status = useSelector((state) => state.auth.status)
    useEffect(() => {
        console.log(status);
    })
    return (
        <Stack.Navigator
            initialRouteName={'ProfileScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Профиль'} logoutIcon={status ? true : false} />
                    ),
                })}
            />
            <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Авторизация'} backIcon hideBorder />
                        //todo back behavior
                    ),
                })}
            />
            <Stack.Screen
                name="VerificationScreen"
                component={VerificationScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Подтверждение'} hideBorder />
                    ),
                })}
            />

            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Забыли пароль?'} backIcon hideBorder />
                    ),
                })}
            />
            <Stack.Screen
                name="ForgotPasswordVerificationScreen"
                component={ForgotPasswordVerificationScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Забыли пароль?'} backIcon hideBorder />
                    ),
                })}
            />
            <Stack.Screen
                name="NewPasswordScreen"
                component={NewPasswordScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Забыли пароль?'} backIcon hideBorder />
                    ),
                })}
            />
            <Stack.Screen
                name="ForgotPasswordVerificationSuccessScreen"
                component={ForgotPasswordVerificationSuccessScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Успешно'} backIcon hideBorder />
                    ),
                })}
            />
            <Stack.Screen
                name="AboutCompany"
                component={AboutCompany}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'О компании'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="PersonalInfoScreen"
                component={PersonalInfoScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Личные данные'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="PurchaseHistoryScreen"
                component={PurchaseHistoryScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'История покупок'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Избранное'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Изменение пароля'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="ChangeEmailScreen"
                component={ChangeEmailScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Изменить эл. почту'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="EmailVerificationScreen"
                component={EmailVerificationScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Изменить эл. почту'} backIcon />
                    ),
                })}
            />
            <Stack.Screen
                name="EmailChangedSuccess"
                component={EmailChangedSuccess}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    header: () => (
                        <Header navigation={navigation} title={'Успешно'} backIcon />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};