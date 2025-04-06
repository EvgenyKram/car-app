import {FontSize} from './../../theme/font-size';
import {colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';
import {scale} from '../../theme/scale';

export const createstyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: scale(12),
    },
    carLogo: {
      height: scale(38),
      width: scale(38),
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(12),
      paddingVertical: scale(12),
    },
    titleStyle: {
      fontSize: FontSize.FONT_24Px,
      color: colors.black,
    },
    textContainer: {
      paddingTop: scale(38),
    },
    textStyle: {
      fontSize: FontSize.FONT_28Px,
      color: colors.black,
    },
  });
