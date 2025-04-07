import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {createstyles} from './input.styles';
import {colors} from '../../theme/colors';
import assets from '../../assets';
import {IInputProps} from './input.props';

const InputComponent = ({
  onChangeText,
  placeholder,
  secureTextEntry,
}: IInputProps) => {
  const {eye} = assets;
  const styles = createstyles();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={styles.input}
      />
      {false && <Image source={eye} style={styles.eye} resizeMode="contain" />}
    </View>
  );
};

export default InputComponent;
