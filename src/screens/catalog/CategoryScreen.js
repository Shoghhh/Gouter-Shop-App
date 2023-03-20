import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DefaultIcon } from "../../../assets/svgs/CatalogSvgs";
import { getRequest } from "../../api/RequestHelpers";
import { Styles } from "../../styles/Styles";
import Productitem from "./components/ProductItem";


export default function CategoryScreen({ navigation, route }) {
    const { id, title } = route.params;
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
    }, [])
    
    function getProducts(){
        getRequest(`getSubcategores/${id}`).then((res) => {
            let products = res.data.get_products.map(el => {
                return {id: el.id, productName: el.title, category: res.data.title, price: el.price, imgPath: require('../../../assets/pngs/categories/product.png'), rating: '4.6'  }
            })
            setProducts(products)
        })

    }

    return <View style={Styles.container}>
        <View style={[Styles.flexRowJustifyBetween, { padding: 20 }]}>
            <Text style={Styles.greyRegular14}>Товаров: {products.length}</Text>
            <TouchableOpacity style={Styles.flexRow}>
                <DefaultIcon />
                <Text style={[Styles.greyRegular14, { marginLeft: 5 }]}>По умолчанию</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={{ paddingHorizontal: 20 }}>
            <View style={[Styles.flexRowJustifyBetween, { flexWrap: 'wrap' }]}>
                {products.map((item, i) => <Productitem key={i} productInfo={item} onPressProduct={() => navigation.navigate('ProductScreen', { productInfo: item, id: item.id, subcategory: title })} />)}
            </View>
        </ScrollView>
    </View>
}