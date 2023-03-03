import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const CustomDropdown = ({options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const renderOption = option => (
    <TouchableOpacity
      key={option.value}
      onPress={() => handleSelectOption(option)}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}>
      <Text>{option.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <Text>{selectedOption?.label || 'Select an option'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            zIndex: 999,
            borderWidth: 1,
            borderColor: '#ccc',
          }}>
          {options.map(renderOption)}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;