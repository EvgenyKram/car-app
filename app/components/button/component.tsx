import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createstyles} from './button.styles';
import {IButtonProps} from './IButton.Props';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../theme/scale';

const Button = ({
  text,
  textStyles,
  buttonStyles,
  onPress,
  component,
}: IButtonProps) => {
  const styles = createstyles();
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyles]}>
      {component}
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
