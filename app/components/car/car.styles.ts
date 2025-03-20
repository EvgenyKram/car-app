import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: scale(16),
      maxWidth: '50%',
      paddingBottom: scale(12),
      marginTop: scale(12),
    },
    carImage: {
      height: scale(100),
      width: scale(160),
    },
    title: {fontFamily: typography.semiBold, fontSize: FontSize.FONT_14Px},
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(4),
    },
    textContainer: {
      paddingHorizontal: scale(12),
    },
    text: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontFamily: typography.regular,
    },
  });
