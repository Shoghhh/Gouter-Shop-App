// import React from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { ArrowDownIcon, ArrowUpIcon } from '../../assets/svgs/CatalogSvgs';
// import { AppColors } from '../styles/AppColors';

// export default function DropDown({
//   open,
//   setOpen,
//   value,
//   setValue,
//   items,
//   setItems,
//   multiple,
//   onOpen,
//   placeholder
// }) {
//   return (
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       onOpen={onOpen}
//       setValue={setValue}
//       setItems={setItems}
//       placeholder={placeholder}
//       placeholderStyle={{
//         // color: AppColors.ALUMINIUM_COLOR,
//         // fontFamily: 'Inter-Medium',
//       }}
//       multipleText={'Выберите'}
//       multiple={multiple}
//       ArrowDownIconComponent={() => <ArrowDownIcon />}
//       ArrowUpIconComponent={() => <ArrowUpIcon />}
//       containerStyle={{
//         marginHorizontal: 25,
//         alignSelf: 'center',
//       }}
//       zIndex={multiple ? 3000 : 1000}
//       zIndexInverse={multiple ? 1000 : 3000}
//       listMode="SCROLLVIEW"
//       // dropDownContainerStyle={{borderColor: AppColors.ALUMINIUM_COLOR}}
//       style={{height: 55, borderRadius: 12}}
//       labelStyle={{
//         color: AppColors.BLACK_COLOR,
//         // fontFamily: 'Inter-Medium',
//       }}
//       listItemLabelStyle={{
//         color: AppColors.BLACK_COLOR,
//         // fontFamily: 'Inter-Medium',
//       }}
//     />
//   );
// }
