import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { ArrowDownIcon, ArrowUpIcon } from '../../assets/svgs/CatalogSvgs';
import { AppColors } from '../styles/AppColors';
import { Styles } from '../styles/Styles';

export default function DropDown({
    open,
    setOpen,
    value,
    setValue,
    placeholder
}) {
    const [items, setItems] = useState([
        { label: 'Доставка курьером', value: 0 },
        { label: 'Cамовывоз', value: 1 }
    ]);
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={placeholder}
            placeholderStyle={{
                // color: AppColors.ALUMINIUM_COLOR,
                // fontFamily: 'Inter-Medium',
            }}
            ArrowDownIconComponent={() => <ArrowDownIcon />}
            ArrowUpIconComponent={() => <ArrowUpIcon />}
            // containerStyle={}
            // zIndex={999999999999999}
            listMode="SCROLLVIEW"
            dropDownContainerStyle={{
                borderColor: AppColors.WHITE_SMOKE_COLOR,
                backgroundColor: "red"
                // zIndex: 99999999999
            }}
            style={{
                height: 45,
                borderRadius: 6,
                marginBottom: 20,
                marginTop: 10,
                borderColor: AppColors.WHITE_SMOKE_COLOR,
                // zIndex: 999999999999999,
            }}
            dropDownDirection="BOTTOM"
            labelStyle={Styles.blackRegular12}
            listItemLabelStyle={Styles.blackRegular12}
            zIndex={1000}
        />
    );
}
