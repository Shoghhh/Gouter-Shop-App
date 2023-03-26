import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {ScrollView, View, Dimensions} from 'react-native';
import {WhiteArrowRight} from '../../../assets/svgs/HomeSvgs';
import {getRequest} from '../../api/RequestHelpers';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import {AppColors} from '../../styles/AppColors';
import {Styles} from '../../styles/Styles';
import Productitem from '../catalog/components/ProductItem';
import FeedBlock from './components/FeedBlock';
import ProServicesContainer from './components/ProServicesContainer';
import ReviewsBlock from './components/ReviewsBlock';
import SalesBlock from './components/SalesBlock';
import Slider from './components/Slider';
import StoriesBlock from './components/StoriesBlock';
import TitleAll from './components/TitleAll';

const {width} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const [sliderImages, setSliderImages] = useState([]);
  const [salesInfo, setSalesInfo] = useState([]);
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);
  const [sections, setSections] = useState([]);
  const [sliderLoading, setSliderLoading] = useState(true);
  const [storiesLoading, setStoriesLoading] = useState(true);
  const [sectionsLoading, setSectionsLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const [stocksLoading, setStocksLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  useEffect(() => {
    getSliderImages();
    getStories();
    getSectionsInfo();
    getNews();
    getStocks();
    getReviews();
  }, []);

  function getSliderImages() {
    getRequest('header_slider').then(res => {
      let imgs = res.headerSlides.map(el => {
        return {imgPath: el.image, id: el.id, number: el.number};
      });
      setSliderImages(imgs);
      setSliderLoading(false);
    });
  }

  function getStories() {
    getRequest(`getAllHistory`).then(res => {
      let stories = res.data.map(el => {
        return {
          id: el.id,
          title: el.title,
          images: el.history_image.map(el => el.image),
        };
      });
      setStories(stories);
      setStoriesLoading(false);
    });
  }

  function getSectionsInfo() {
    getRequest('getSections').then(res => {
      let sections = res.data.map(el => {
        return {
          id: el.id,
          title: el.title,
          products: el.get_product.map(e => {
            return {
              id: e.id,
              productName: e.title,
              subcategory: res.data.title,
              price: e.price,
              description: e.description,
              degreeOfRoast: e.degreeOfRoast,
              compound: e.compound,
              images: e.get_product_image.map(e => e.image),
              rating: '4.6',
            };
          }),
        };
      });
      setSections(sections);
      setSectionsLoading(false);
    });
  }

  function getNews() {
    getRequest('get_news_lists').then(res => {
      let news = res.data.map(el => {
        return {
          id: el.id,
          image: el.image,
          title: el.title,
          news: el.get_news.map(e => {
            return {
              id: e.id,
              image: e.image,
              longText: e.longText,
              shortText: e.short_text,
              shortTextTitle: e.short_text_title,
            };
          }),
        };
      });
      setNews(news);
      setNewsLoading(false);
    });
  }

  function getStocks() {
    getRequest('getStocks').then(res => {
      let sales = res.data.map(el => {
        return {
          id: el.id,
          img: el.image,
          long_description: el.long_description,
          short_description: el.short_description,
          title: el.title,
        };
      });
      setSalesInfo(sales);
      setStocksLoading(false);
    });
  }

  function getReviews() {
    getRequest('get_all_reviews/Product').then(res => {
      // console.log(res.data);
      //todo wrong data
    });
  }

  return (
    <View style={Styles.container}>
      <ScrollView
        style={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        {sliderLoading ? <Loading /> : <Slider images={sliderImages} />}
        {storiesLoading ? (
          <Loading />
        ) : (
          <StoriesBlock navigation={navigation} stories={stories} />
        )}
        {sectionsLoading ? (
          <Loading />
        ) : (
          sections.map((el, i) => {
            return (
              <View key={i}>
                <TitleAll
                  title={el.title}
                  onPressAll={() =>
                    navigation.navigate('ProductsScreen', {
                      title: el.title,
                      products: el.products,
                    })
                  }
                />
                <ScrollView
                  horizontal
                  style={{marginLeft: 20}}
                  showsHorizontalScrollIndicator={false}>
                  {el.products.map((item, i) => (
                    <Productitem
                      key={i}
                      productInfo={item}
                      width={150}
                      marginRight={10}
                      hideFavorite
                    />
                  ))}
                </ScrollView>
              </View>
            );
          })
        )}
        {stocksLoading ? <Loading/> : <SalesBlock navigation={navigation} data={salesInfo} />}
        <ProServicesContainer />
        {newsLoading ? (
          <Loading />
        ) : (
          <FeedBlock navigation={navigation} data={news} />
        )}
        <ReviewsBlock navigation={navigation} />
      </ScrollView>
      <View style={Styles.absoluteButton}>
        <Button
          text={'Весь каталог'}
          Icon={WhiteArrowRight}
          onPress={() => navigation.navigate('Catalog')}
        />
      </View>
    </View>
  );
}
