import {scale} from '../../theme/scale';
import {colors} from './../../theme/colors';
import {StyleSheet} from 'react-native';

export const createstyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.checkBoxBg,
      alignSelf: 'flex-start',
      borderRadius: scale(4),
      height: scale(22),
      width: scale(22),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
