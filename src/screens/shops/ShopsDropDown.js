import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    LayoutAnimation,
    Platform,
    View,
    ImageBackground,
} from 'react-native';
import { Styles } from '../../styles/Styles';
import { AppColors } from '../../styles/AppColors';
import { ArrowDownIcon, ArrowUpIcon } from '../../../assets/svgs/CatalogSvgs';
import { GreenCircleIcon, GreyArrowDown, GreyArrowUp, RedCircleIcon, YellowCircleIcon } from '../../../assets/svgs/ShopSvgs';

export default function ShopsDropDown({ data, defaultOpenedId, setCurrentShop }) {
    const [selectedItem, setSelectedItem] = useState(defaultOpenedId);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    function onSelect(id) {
        if (id === selectedItem) {
            setSelectedItem(null);
            return;
        }
        setSelectedItem(id);
    }

    function toggleExpand() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    const Categories = ({ data, isOpened, onPress }) => {
        return (
            <View style={{borderBottomWidth: 2, borderColor: AppColors.WHITE_SMOKE_COLOR}}>
                <TouchableOpacity
                    style={styles.blockContainer}
                    onPress={onPress}>
                    <View style={Styles.flexRow}>
                        {data.state === 'yellow' ? <YellowCircleIcon /> : data.state === 'green' ? <GreenCircleIcon /> : data.state === 'red' ? <RedCircleIcon /> : null}
                        <Text style={[Styles.greyRegular15, { marginLeft: 5 }]}>{data.title}</Text>
                    </View>
                    {isOpened ? <GreyArrowUp /> : <GreyArrowDown />}
                </TouchableOpacity>
                {isOpened && data.shops.map((item, i) => <TouchableOpacity style={{ paddingVertical: 15 }} key={i} onPress={() => setCurrentShop(item)}>
                    <Text style={Styles.blackSemiBold16}>{item.name}</Text>
                    <Text style={Styles.greyRegular14}>{item.address}</Text>
                    <Text style={Styles.greyRegular14}>{item.workingHours}</Text>
                </TouchableOpacity>)}
            </View>
        );
    };
    return data.map((item, i) => <Categories key={i} data={item} isOpened={selectedItem === item.id} onPress={() => { onSelect(item.id); toggleExpand() }} />)
}

const styles = StyleSheet.create({
    blockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    image: {
        width: '100%',
        height: 90,
    },
    categoryName: {
        color: AppColors.WHITE_COLOR,
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        margin: 8,
    },
    circle: {
        height: 8,
        width: 8,
        borderRadius: 10
    }
});
