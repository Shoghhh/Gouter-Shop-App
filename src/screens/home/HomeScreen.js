import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { WhiteArrowRight } from "../../../assets/svgs/HomeSvgs";
import Button from "../../components/Button";
import { AppColors } from "../../styles/AppColors";
import { Styles } from "../../styles/Styles";
import Productitem from "../catalog/components/ProductItem";
import FavoritesBlock from "./components/FavoritesBlock";
import FeedBlock from "./components/FeedBlock";
import ProServicesContainer from "./components/ProServicesContainer";
import ReviewsBlock from "./components/ReviewsBlock";
import SalesBlock from "./components/SalesBlock";
import Slider from "./components/Slider";
import StoriesBlock from "./components/StoriesBlock";
import TitleAll from "./components/TitleAll";

const { width } = Dimensions.get('window')

export default function HomeScreen({ navigation }) {
    const pleasantPricesProducts = [
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
    ]
    const giftProducts = [
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
    ]
    const sliderImages = [
        { imgPath: require('../../../assets/pngs/home/Slider.png') },
        { imgPath: require('../../../assets/pngs/home/Slider.png') },
        { imgPath: require('../../../assets/pngs/home/Slider.png') },
        { imgPath: require('../../../assets/pngs/home/Slider.png') },
        { imgPath: require('../../../assets/pngs/home/Slider.png') },
    ]

    const productsInfo = [
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png') },
        { productName: 'Ил Дивино', category: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png') },
    ]
    
    return <View style={Styles.container}>
        <ScrollView style={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
            <Slider images={sliderImages} />
            <StoriesBlock navigation={navigation}/>
            <TitleAll title={'Подарки на 23 Февраля'} onPressAll={() =>
                navigation.navigate('CategoryScreen', { title: 'Подарки на 23 Февраля', productsInfo: productsInfo })
            } />
            <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
                {giftProducts.map((item, i) => <Productitem key={i} productInfo={item} width={150} marginRight={10} hideFavorite />)}
            </ScrollView>
            <TitleAll title={'Приятные цены'} />
            <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
                {pleasantPricesProducts.map((item, i) => <Productitem key={i} productInfo={item} width={150} marginRight={10} hideFavorite />)}
            </ScrollView>
            <FavoritesBlock />
            <SalesBlock navigation={navigation} />
            <ProServicesContainer />
            <FeedBlock navigation={navigation} />
            <ReviewsBlock navigation={navigation}/>
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Весь каталог'} Icon={WhiteArrowRight} onPress={() => navigation.navigate('Catalog')} />
        </View>
    </View>
}
