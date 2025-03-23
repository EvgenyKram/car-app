import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: scale(28),
    },
    main: {
      flex: 1,
    },
    p18: {
      paddingHorizontal: scale(18),
    },
    showCase: {
      rowGap: scale(12),
      marginTop: scale(8),
    },
    showCaseCars: {
      backgroundColor: colors.white,
      flex: 1,
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      marginTop: scale(24),
      paddingTop: scale(20),
    },
    viewAll: {
      color: colors.placeholder,
      fontSize: FontSize.FONT_12Px,
    },
    viewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(14),
      paddingVertical: scale(12),
    },
    text: {
      fontSize: FontSize.FONT_16Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
    textContainer: {
      paddingHorizontal: scale(12),
    },
    dollarContainer: {
      borderColor: colors.gray,
      borderWidth: scale(1),
      height: scale(14),
      width: scale(14),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    textBold: {
      fontFamily: typography.semiBold,
    },
    priceContainer: {
      paddingVertical: scale(4),
      alignItems: 'center',
      columnGap: scale(8),
    },
    price: {
      fontSize: FontSize.FONT_11Px,
      color: colors.black,
    },
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(2),
    },
    buttonStyles: {
      paddingVertical: scale(6),
      paddingHorizontal: scale(8),
    },
    textStyles: {
      fontSize: FontSize.FONT_12Px,
    },
  });
