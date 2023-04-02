import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import HorizontalProductItem from "../../catalog/components/HorizontalProductItem";


export default function ReviewAboutProductScreen({ navigation }) {
    const [searchValue, setSearchValue] = useState('');
    
    const [productsInfo, setProductsInfo] = useState([
        { id: 0, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 1, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 2, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 3, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 4, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 5, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 6, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 7, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 8, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
        { id: 9, productName: 'Ил Дивино, 100г', imgPath: require('../../../../assets/pngs/categories/product.png'), category: 'Классический кофе', isSelected: false, },
    ])

    function onSelectItem(i) {
        setProductsInfo(productsInfo => [
            ...productsInfo.slice(0, i),
            {
                ...productsInfo[i],
                isSelected: !productsInfo[i].isSelected,
            },
            ...productsInfo.slice(i + 1)
        ]);
    }

    return <View style={[Styles.container, { paddingTop: 20 }]}>
        <SearchInput value={searchValue} onChangeValue={setSearchValue} placeholder={'Поиск...'}/>
        {searchValue && <ScrollView style={{ paddingHorizontal: 20 }}>
            {/* {productsInfo.map((item, i) => <HorizontalProductItem productInfo={item} key={i} hideBasket selectMode onPress={() => onSelectItem(i)} />)} */}
            {productsInfo.some((el) => el.isSelected === true) && <View style={{ height: 70 }} />}
        </ScrollView>}
        {productsInfo.some((el) => el.isSelected === true) && <View style={Styles.absoluteButton}>
            <Button text={'Далее'} backgroundColor={AppColors.GREEN_COLOR} onPress={() => navigation.navigate('LeaveAReviewScreen')} />
        </View>}
    </View>
}