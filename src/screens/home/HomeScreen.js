import React, { useEffect, useState } from "react";
import { ScrollView, View, Dimensions } from "react-native";
import { WhiteArrowRight } from "../../../assets/svgs/HomeSvgs";
import { getRequest } from "../../api/RequestHelpers";
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
    const [sliderImages, setSliderImages] = useState([])
    const [salesInfo, setSalesInfo] = useState([])

    useEffect(() => {
        getSliderImages()
        getStories()
        // getSectionsInfo()
        // getNews()
        // getNewsList()
        getStocks()
    }, [])

    function getSliderImages(){
        getRequest('header_slider').then((res) => {
            let imgs = res.headerSlides.map((el) => {
                return {imgPath: el.image, id: el.id, number: el.number}
            })
            // console.log('header_slider', res);
            setSliderImages(imgs)
        })
    }

    function getStories(){
        getRequest(`getAllHistory`).then((res) => {
            console.log('getAllHistory',res);
        })
    }

    function getSectionsInfo(){
        getRequest('getSection/3').then(res => {
            console.log('getSection', res);
        })
    }

    function getNews(){
        getRequest('get_news').then(res => {
            console.log('get_news', res.data)
            let news = res.data.map(el => {
                return {id: el.id, image:el.image, title: el.title, news: el.get_news}
            })
            
        })
    }

    function getNewsList(){
        getRequest('get_news_lists').then(res => {
            // console.log('get_news_lists', res.data)
            let news_list = res.data.map(el => {
                return {id: el.id, image:el.image, title: el.title, news: el.get_news}
            })
            // console.log('news',news_list[0]);
            // console.log('get_news_lists.news',news[0]);
        })
    }

    function getStocks(){
        getRequest('getStocks').then(res => {
            let sales = res.data.map(el => {
                return { id: el.id, img: el.image, long_description: el.long_description, short_description: el.short_description, title: el.title}
            })
            setSalesInfo(sales)
        })
    }

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
            <SalesBlock navigation={navigation} data={salesInfo}/>
            <ProServicesContainer />
            <FeedBlock navigation={navigation} />
            <ReviewsBlock navigation={navigation}/>
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Весь каталог'} Icon={WhiteArrowRight} onPress={() => navigation.navigate('Catalog')} />
        </View>
    </View>
}
