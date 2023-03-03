import React, { useState } from "react";
import { Image, Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { AppColors } from "../../../styles/AppColors";
const { width } = Dimensions.get('window')

export default function Slider({ images }) {
    const [index, setIndex] = useState(0);

    function handleScroll(event) {
        const slider = Math.ceil(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width,
        );
        setIndex(slider)
        console.log(slider);
    }

    return <>
        <ScrollView horizontal style={styles.container} pagingEnabled onScroll={handleScroll}>
            {images.map((image, i) => <Image source={image.imgPath} style={styles.image} resizeMode={'cover'} key={i} />)}
        </ScrollView>
        <View style={styles.circlesContainer}>
            {images.map((item, i) => <View style={[styles.circle, index === i && { opacity: 1 }]} key={i} />)}
        </View>
    </>
}


const styles = StyleSheet.create({
    circlesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        top: 145,
        flexDirection: 'row',
    },
    circle: {
        width: 9,
        height: 9,
        borderRadius: 50,
        marginHorizontal: 5,
        backgroundColor: AppColors.WHITE_SMOKE_COLOR,
        opacity: 0.6
    },
    image: {
        width: width - 40, height: 140, borderRadius: 10
    },
    container: {
        marginHorizontal: 20,
        marginTop: 30,
    }
})