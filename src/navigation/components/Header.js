import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LogoutIcon } from "../../../assets/svgs/ProfileSvgs";
import { getRequestAuth } from "../../api/RequestHelpers";
import Popup from "../../components/Popup";
import { deleteToken } from "../../store/actions/saveToken";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import { BackIcon, SearchIcon, ShareIcon } from "./NavigationMenuSvgs";
export default function Header({ title, navigation, backIcon, searchIcon, onPressSearch, shareIcon, hideBorder, address, logoutIcon }) {
    const dispatch = useDispatch()
    const [showPopup, setShowPopup] = useState(false)
    const token = useSelector(state => state.auth.token)
    function onPressLogout() {
        getRequestAuth('logout_user', token).then(res => {
            setShowPopup(false);
            dispatch(deleteToken())
            navigation.navigate('Home')
        })
    }
    return <View style={[styles.container, hideBorder && { borderBottomWidth: 0 }]}>
        {address ? <TouchableOpacity style={styles.addressContainer} onPress={() => navigation.navigate('DeliveryAddressScreen')}>
            <Text style={styles.addressText}>Укажите адрес доставки</Text>
        </TouchableOpacity> :
            <Text style={[Styles.blackSemiBold18, { marginBottom: 12, width: '58%', alignSelf: 'center', textAlign: 'center' }]} numberOfLines={1}>{title}</Text>}
        {backIcon && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
            <BackIcon />
        </TouchableOpacity>}
        {searchIcon && <TouchableOpacity onPress={onPressSearch} style={styles.searchIcon}>
            <SearchIcon />
        </TouchableOpacity>}
        {shareIcon && <TouchableOpacity style={styles.searchIcon}>
            <ShareIcon />
        </TouchableOpacity>}
        {logoutIcon && <TouchableOpacity style={styles.searchIcon} onPress={() => setShowPopup(true)}>
            <LogoutIcon />
        </TouchableOpacity>}
        {logoutIcon && <Popup showPopup={showPopup} title={'Выход'} text={'Вы уверены, что хотите выйти?'} firstBtnText={'Да'} secondBtnText={'Нет'} firstOnPress={onPressLogout} secondOnPress={() => setShowPopup(false)} />}
    </View>
}
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: AppColors.WHITE_SMOKE_COLOR,
        backgroundColor: AppColors.WHITE_COLOR,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backIcon: {
        position: 'absolute',
        left: 20,
        bottom: 14,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 5
    },
    searchIcon: {
        position: 'absolute',
        right: 20,
        bottom: 10
    },
    addressContainer: {
        backgroundColor: AppColors.PURPLE_COLOR,
        height: 30,
        borderRadius: 10,
        paddingHorizontal: 40,
        position: 'absolute',
        bottom: 12,
        justifyContent: 'center'
    },
    addressText: {
        color: AppColors.WHITE_COLOR,
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
    }
})