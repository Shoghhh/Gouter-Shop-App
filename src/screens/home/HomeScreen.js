import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { WhiteArrowRight } from '../../../assets/svgs/HomeSvgs';
import { getRequest, getRequestAuth, postRequestAuth } from '../../api/RequestHelpers';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Context from '../../Context';
import { Styles } from '../../styles/Styles';
import Productitem from '../catalog/components/ProductItem';
import FeedBlock from './components/FeedBlock';
import ProServicesContainer from './components/ProServicesContainer';
import ReviewsBlock from './components/ReviewsBlock';
import SalesBlock from './components/SalesBlock';
import Slider from './components/Slider';
import StoriesBlock from './components/StoriesBlock';
import TitleAll from './components/TitleAll';
import SectionsBlock from './components/SectionsBlock';

export default function HomeScreen({ navigation }) {
  const token = useSelector((state) => state.auth.token)
  const context = useContext(Context)
  const [sliderImages, setSliderImages] = useState([]);
  const [salesInfo, setSalesInfo] = useState([]);
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);
  const [sections, setSections] = useState({})
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getHomeData()
  }, []);


  function getHomeData() {
    getRequest('get_home_page_data').then(res => {
      setStories(res.histores.map(el => ({
        id: el.id,
        title: el.title,
        images: el.history_image.map(el => el.image),
      })))
      setNews(res.news_list.map(el => ({
        id: el.id,
        image: el.image,
        title: el.title,
        news: el.get_news.map(e => ({
          id: e.id,
          image: e.image,
          longText: e.longText,
          shortText: e.short_text,
          shortTextTitle: e.short_text_title,
        }
        )),
      })))
      setSliderImages(res.slider.map(el => ({ imgPath: el.image, id: el.id, number: el.number })))
      setSalesInfo(res.stocks.map(el => ({
        id: el.id,
        img: el.image,
        long_description: el.long_description,
        short_description: el.short_description,
        title: el.title,
      })))
      setReviews(res.reviews.map(el => ({
        username: el.user_name,
        comment: el.text,
        rating: el.stars,
        date: new Date(el.created_at).toLocaleDateString('ru', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        productInfo: {
          productName: el.get_product.title,
          id: el.get_product.id,
          subcategory: el.get_product.get_subcategory.title,
          price: el.get_product.price,
          images: el.get_product.get_product_image.map(e => e.image),
        },
      })))
      setSections(res.sections.map(el => ({
        id: el.id,
        title: el.title,
        products: el.get_product.map(e => ({
          id: e.id,
          productName: e.title,
          subcategory: e.get_subcategory.title,
          price: e.price,
          images: e.get_product_image.map(e => e.image),
        })),
      })))
      setLoading(false)
    })
  }

  return (
    <View style={Styles.container}>
      <ScrollView
        style={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {loading ? <Loading /> :
          <>
            <Slider images={sliderImages} />
            <StoriesBlock navigation={navigation} stories={stories} />
            <SectionsBlock navigation={navigation} sections={sections} />
            <SalesBlock navigation={navigation} data={salesInfo} />
            <ProServicesContainer />
            <FeedBlock navigation={navigation} data={news} />
            <ReviewsBlock data={reviews} navigation={navigation} />
          </>
        }
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
