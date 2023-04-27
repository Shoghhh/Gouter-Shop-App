import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CheckMark } from "../../../../assets/svgs/HomeSvgs";
import Button from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";

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

    const [nextUrl, setNextUrl] = useState('https://kantata.justcode.am/api/search_gallery')
    const [isLoading, setIsLoading] = useState()
    const [loading, setLoading] = useState(false);
    // const [products, setProducts] = useState([]);
    const [galleries, setGalleries] = useState([])
    const [selectedGalleryIds, setSelectedGalleryIds] = useState([])
    const token = useSelector(state => state.auth.token)
    //todo
    function onSearch(value) {
        value != null && setSearchValue(value);
        value != null && setLoading(true);
        value != null && setSelectedGalleryIds([])
        if (!value && (typeof value == 'string')) {
            setNextUrl('https://kantata.justcode.am/api/search_gallery')
            return
        }
        postRequestPaginationAuth(value ? 'https://kantata.justcode.am/api/search_gallery' : nextUrl, {
            search_text: value,
        }, token).then(([status, body]) => {
            if (status === 200) {
                const myGalleries = body.data.data.map(e => ({
                    id: e.id,
                    //todo
                }))
                value ? setProducts(myGalleries) : setProducts([...products, ...myGalleries])
                setNextUrl(body.data.next_page_url)
            } else {
                setProducts([])
                setNextUrl(null)
            }
            setLoading(false);
            setIsLoading(false)
        });
    }

    const handleLoadMore = () => {
        if (nextUrl) {
            console.log('handleLoadMore', nextUrl);
            setIsLoading(true)
            onSearch()
        }
    };

    const renderFooter = () => {
        return <>
            {isLoading ? <View style={{ marginBottom: 30 }}>
                <Loading />
            </View> : null}
            {selectedGalleryIds.length ? <View style={{ height: 70 }} /> : null}
        </>
    };

    function onSelectItem(productInfo) {
        const updatedProducts = products.map(item => {
            if (item.id === productInfo.id) {
                item.isSelected ?
                    setSelectedGalleryIds(selectedGalleryIds.filter(id => id !== productInfo.id)) :
                    setSelectedGalleryIds([...selectedGalleryIds, productInfo.id])
                return { ...item, isSelected: item.isSelected ? false : true }
            }
            return item;
        });
        setProducts(updatedProducts);
    }



    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <SearchInput value={searchValue} onChangeValue={setSearchValue} placeholder={'Поиск...'} />
        {/* <ScrollView style={{ paddingHorizontal: 20 }}>
            {galleryItemsinfo.map((item, i) => <GalleryItem galleryInfo={item} key={i} onPress={() => onSelectItem(i)} />)}
        </ScrollView> */}


        <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 20 }}
            data={galleryItemsinfo}
            renderItem={(item, i) => <GalleryItem galleryInfo={item} key={i} onPress={() => onSelectItem(i)} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={1}
            ListFooterComponent={renderFooter}
        />

        {selectedGalleryIds.length > 0 && < View style={Styles.absoluteButton}>
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