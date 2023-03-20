import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { url } from "../../../api/RequestHelpers";
import { AppColors } from "../../../styles/AppColors";
import TitleAll from "./TitleAll";

export default function StoriesBlock({ navigation, stories }) {

    function StoryItem({ storyInfo }) {
        return <TouchableOpacity style={styles.categoryContainer} >
            <ImageBackground source={{ uri: `${url}uploads/${storyInfo.images[0]}` }} resizeMode="contain" style={styles.image} borderRadius={10} >
                <View style={styles.blackBack}>
                    <Text style={styles.categoryName}>{storyInfo.title}</Text>
                </View>
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
    },
    image: {
        width: 90,
        height: 90,
        justifyContent: 'flex-end',
    },
    categoryName: {
        color: AppColors.WHITE_COLOR,
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        padding: 8,
    },
    blackBack: {
        backgroundColor: '#00000050',
        borderRadius: 10,
        height: '100%',
        justifyContent: 'flex-end'
    },
});