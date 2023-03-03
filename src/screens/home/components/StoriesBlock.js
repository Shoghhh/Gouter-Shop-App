import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../../styles/AppColors";
import { Styles } from "../../../styles/Styles";
import TitleAll from "./TitleAll";

export default function StoriesBlock({navigation}) {
    const stories = [
        { title: 'Дарим купоны', imgPath: require('../../../../assets/pngs/home/storyBlock.png') },
        { title: 'Дарим купоны', imgPath: require('../../../../assets/pngs/home/storyBlock.png') },
        { title: 'Дарим купоны', imgPath: require('../../../../assets/pngs/home/storyBlock.png') },
        { title: 'Дарим купоны', imgPath: require('../../../../assets/pngs/home/storyBlock.png') },
        { title: 'Дарим купоны', imgPath: require('../../../../assets/pngs/home/storyBlock.png') },
    ]

    function StoryItem({ storyInfo }) {
        return <TouchableOpacity style={styles.categoryContainer} >
            <ImageBackground source={storyInfo.imgPath} resizeMode="contain" style={styles.image} borderRadius={10} >
                <Text style={styles.categoryName}>{storyInfo.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    }
    return <>
        <TitleAll title={'Истории'} hideAll />
        <ScrollView horizontal style={{ height: 90, marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
            {stories.map((item, i) => <StoryItem storyInfo={item} key={i} />)}
        </ScrollView>
    </>
}


const styles = StyleSheet.create({
    categoryContainer: {
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: 'red'
    },
    image: {
        width: 90,
        height: 90,
        justifyContent: 'flex-end'
    },
    categoryName: {
        color: AppColors.WHITE_COLOR,
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        margin: 8,
    }

});