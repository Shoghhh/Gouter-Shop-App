import React from "react";
import { Text, View } from "react-native";
import InstaStory from 'react-native-insta-story';

export default function StoryScreen() {
    const data = [
        {
            user_id: 1,
            user_image: require('../../../assets/pngs/home/Story.png'),
            user_name: '',
            stories: [
                {
                    story_id: 1,
                    story_image: require('../../../assets/pngs/home/Story.png'),
                },
                {
                    story_id: 2,
                    story_image: require('../../../assets/pngs/home/Story.png'),
                },
            ],
        },  
    ]

    return <InstaStory
        data={data}
        duration={10}
        onStart={(item) => console.log(item)}
        onClose={(item) => console.log('close: ', item)}
        customSwipeUpComponent={
            <View>
                <Text>Swipe</Text>
            </View>
        }
        style={{ marginTop: 30 }}
    />
}