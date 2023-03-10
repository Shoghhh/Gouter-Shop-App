import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import ShopsDropDown from "./ShopsDropDown";
import SingleShopScreen from "./SingleShopScreen";


export default function ShopsList({ navigation }) {
    const [searchValue, setSearchValue] = useState('')
    const [currentShop, setCurrentShop] = useState(null)
    const shopsInfo = [
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', workingHours: 'Вс-Чт 10:00 - 22:00', phone: '+7 (000) 000-00-00', description: 'Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Вот вам яркий пример современных тенденций — социально-экономическое развитие предполагает независимые способы', imgPath: require('../../../assets/pngs/home/PostSingleImage.png') },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', workingHours: 'Вс-Чт 10:00 - 22:00', phone: '+7 (000) 000-00-00', description: 'Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Вот вам яркий пример современных тенденций — социально-экономическое развитие предполагает независимые способы', imgPath: require('../../../assets/pngs/home/PostSingleImage.png') },
        { name: 'ТЦ Панорама', address: 'Москва. ул. Гарибальди д.23', workingHours: 'Вс-Чт 10:00 - 22:00', phone: '+7 (000) 000-00-00', description: 'Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Вот вам яркий пример современных тенденций — социально-экономическое развитие предполагает независимые способы', imgPath: require('../../../assets/pngs/home/PostSingleImage.png') },
    ]

    return <View style={{ flex: 1 }}>
        {currentShop ? <SingleShopScreen shopInfo={currentShop} setCurrentShop={setCurrentShop}/> :
            <>
                <SearchInput value={searchValue} onChangeValue={setSearchValue} placeholder={'Поиск по названию или адресу'} />
                <ScrollView style={{ paddingHorizontal: 20 }}>
                    <ShopsDropDown
                        data={[
                            { id: 0, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                            { id: 1, title: 'Новые галереи', shops: shopsInfo, state: 'green' },
                            { id: 2, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                            { id: 3, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                            { id: 4, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                            { id: 5, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                            { id: 6, title: 'Новые галереи', shops: shopsInfo, state: 'red' },
                            { id: 7, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                            { id: 8, title: 'Новые галереи', shops: shopsInfo, state: 'yellow' },
                        ]} setCurrentShop={setCurrentShop} />
                </ScrollView>
            </>}
    </View>
}