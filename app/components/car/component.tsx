import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {createStyles} from './car.styles';
import assets from '../../assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {scale} from '../../theme/scale';
import {colors} from '../../theme/colors';
import {renderMarginBottom} from '../../utils/ui-utils';

const CarComponent = () => {
  const styles = createStyles();
  const {ferrari} = assets;

  return (
    <Pressable style={styles.container}>
      <Image source={ferrari} resizeMode="contain" style={styles.carImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ferrari</Text>
        {renderMarginBottom(4)}
        <View style={styles.flex}>
          <Text style={styles.title}>5.0</Text>
          <MaterialIcons name="star" size={scale(20)} color={colors.star} />
        </View>
        {renderMarginBottom(4)}
        <View style={styles.flex}>
          <EvilIcons name="location" size={scale(20)} color={colors.gray} />
          <Text style={styles.text}>WashingTon DC</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarComponent;
