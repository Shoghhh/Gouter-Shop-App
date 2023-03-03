import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CheckMark } from "../../../../assets/svgs/HomeSvgs";
import Button from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";

export default function ReviewAboutGalleryScreen({ navigation }) {
    const [searchValue, setSearchValue] = useState()

    const [galleryItemsinfo, setGalleryItemsInfo] = useState([
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', isSelected: false },
    ])

    function onSelectItem(i) {
        setGalleryItemsInfo(galleryItemsinfo => [
            ...galleryItemsinfo.slice(0, i),
            {
                ...galleryItemsinfo[i],
                isSelected: !galleryItemsinfo[i].isSelected,
            },
            ...galleryItemsinfo.slice(i + 1)
        ]);
    }



    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <SearchInput value={searchValue} onChangeValue={setSearchValue} placeholder={'Поиск...'}/>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            {galleryItemsinfo.map((item, i) => <GalleryItem galleryInfo={item} key={i} onPress={() => onSelectItem(i)} />)}
            {galleryItemsinfo.some((el) => el.isSelected === true) && <View style={{ height: 70 }} />}
        </ScrollView>
        {galleryItemsinfo.some((el) => el.isSelected === true) && < View style={Styles.absoluteButton}>
            <Button text={'Далее'} backgroundColor={AppColors.GREEN_COLOR} onPress={() => navigation.navigate('LeaveAReviewScreen')} />
        </View>}
    </View >
}
function GalleryItem({ galleryInfo, onPress }) {
    return <TouchableOpacity style={[Styles.flexRowJustifyBetween, { borderBottomWidth: 2, borderColor: AppColors.WHITE_SMOKE_COLOR, paddingVertical: 10, paddingRight: 5 }]} onPress={onPress}>
        <View>
            <Text style={Styles.blackSemiBold16}>{galleryInfo.name}</Text>
            <Text style={Styles.greyRegular14} >{galleryInfo.address}</Text>
        </View>
        {galleryInfo.isSelected && <CheckMark />}
    </TouchableOpacity>
}