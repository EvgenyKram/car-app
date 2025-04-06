import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createstyles} from './checkbox.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';
import {ICheckBoxProps} from './ICheckbox.props';
import {useState} from 'react';

const CheckBoxComponent = ({
  onPress = () => {},
  isChecked = false,
}: ICheckBoxProps) => {
  const styles = createstyles();
  const [checked, setChecked] = React.useState(isChecked);
  return (
    <Pressable
      onPress={() => {
        setChecked(!checked);
        onPress(!checked);
      }}
      style={styles.container}>
      {checked && (
        <MaterialIcons name="check" size={scale(20)} color={colors.white} />
      )}
    </Pressable>
  );
};

export default CheckBoxComponent;
