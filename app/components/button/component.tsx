import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createstyles} from './button.styles';
import {IButtonProps} from './IButton.Props';

const Button = ({text, textStyles, buttonStyles, onPress}: IButtonProps) => {
  const styles = createstyles();
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyles]}>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
