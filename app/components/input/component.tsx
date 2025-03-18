import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {createStyles} from './input.styles';
import {colors} from '../../theme/colors';
import assets from '../../assets';
import {IInputProps} from './input.props';

const InputComponent = ({
  onChangeText,
  secureTextEntry,
  placeholder,
}: IInputProps) => {
  const styles = createStyles();
  const {eye} = assets;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {secureTextEntry && (
        <Image source={eye} style={styles.eye} resizeMode="contain" />
      )}
    </View>
  );
};

export default InputComponent;
