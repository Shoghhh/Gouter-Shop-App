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
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
    ]
    const giftProducts = [
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/home/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
        { productName: 'Ил Дивино', subcategory: 'Классический кофе', rating: '4.6', price: '397 Р', imgPath: require('../../../assets/pngs/categories/product.png'), oldPrice: '400 Р' },
    ]
    const [sliderImages, setSliderImages] = useState([])
    const [salesInfo, setSalesInfo] = useState([])
    const [stories, setStories] = useState([])
    const [news, setNews] = useState([])
    const [sections, setSections] = useState([])

    useEffect(() => {
        getSliderImages()
        getStories()
        // getSectionsInfo()
        getNews()
        getStocks()
    }, [])

    function getSliderImages() {
        getRequest('header_slider').then((res) => {
            let imgs = res.headerSlides.map((el) => {
                return { imgPath: el.image, id: el.id, number: el.number }
            })
            setSliderImages(imgs)
        })
    }

    function getStories() {
        getRequest(`getAllHistory`).then((res) => {
            let stories = res.data.map(el => {
                return { id: el.id, title: el.title, images: el.history_image.map(el => el.image) }
            })
            setStories(stories)
        })
    }

    function getSectionsInfo() {
        getRequest('getSections').then(res => {
            console.log('getSections', res.data[0]);
            let sections = res.data.map(el => {
                return { id: el.id, title: el.title, products: el.get_product }
            })
        })
    }

    function getNews() {
        getRequest('get_news_lists').then(res => {
            console.log('get_news_lists', res.data[0])
            let news = res.data.map(el => {
                return {
                    id: el.id, image: el.image, title: el.title, news: el.get_news.map(e => {
                        return { id: e.id, image: e.image, longText: e.longText, shortText: e.short_text, shortTextTitle: e.short_text_title, }
                    })
                }
            })
            console.log(news);
            setNews(news)
        })
    }

    function getStocks() {
        getRequest('getStocks').then(res => {
            let sales = res.data.map(el => {
                return { id: el.id, img: el.image, long_description: el.long_description, short_description: el.short_description, title: el.title }
            })
            setSalesInfo(sales)
        })
    }

    return <View style={Styles.container}>
        <ScrollView style={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
            <Slider images={sliderImages} />
            <StoriesBlock navigation={navigation} stories={stories} />
            {/* <TitleAll title={'Подарки на 23 Февраля'} onPressAll={() =>
                navigation.navigate('CategoryScreen', { title: 'Подарки на 23 Февраля' })
            } />
            <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
                {giftProducts.map((item, i) => <Productitem key={i} productInfo={item} width={150} marginRight={10} hideFavorite />)}
            </ScrollView>
            <TitleAll title={'Приятные цены'} />
            <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
                {pleasantPricesProducts.map((item, i) => <Productitem key={i} productInfo={item} width={150} marginRight={10} hideFavorite />)}
            </ScrollView>
            <FavoritesBlock /> */}

            <SalesBlock navigation={navigation} data={salesInfo} />
            <ProServicesContainer />
            <FeedBlock navigation={navigation} data={news} />
            <ReviewsBlock navigation={navigation} />
        </ScrollView>
        <View style={Styles.absoluteButton}>
            <Button text={'Весь каталог'} Icon={WhiteArrowRight} onPress={() => navigation.navigate('Catalog')} />
        </View>
    </View>
}
