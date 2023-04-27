import React from "react";
import { View } from "react-native";
import TitleAll from "./TitleAll";
import { ScrollView } from "react-native";
import Productitem from "../../catalog/components/ProductItem";


export default function SectionsBlock({navigation, sections}) {
    return sections.map((el, i) => {
        return (
            <View key={i}>
                <TitleAll
                    title={el.title}
                    onPressAll={() =>
                        navigation.navigate('ProductsScreen', {
                            title: el.title,
                            id: el.id
                        })
                    }
                />
                <ScrollView
                    horizontal
                    style={{ marginLeft: 20 }}
                    showsHorizontalScrollIndicator={false}>
                    {el.products.map((item, j) => (
                        <Productitem
                            key={j}
                            productInfo={item}
                            width={150}
                            marginRight={10}
                            hideFavorite
                            onPressProduct={() => navigation.navigate('ProductScreen', { productId: item.id })}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    })
}