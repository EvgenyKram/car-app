import {colors} from './../../theme/colors';
import {FontSize} from './../../theme/font-size';

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
      marginBottom: scale(12),
    },
    textStyle: {
      fontSize: FontSize.FONT_28Px,
      color: colors.black,
    },
    textRemember: {
      fontSize: FontSize.FONT_12Px,
      color: colors.placeholder,
      fontWeight: '500',
    },
    colG2: {
      columnGap: scale(2),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(16),
    },
    forgotContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    inputContainer: {
      rowGap: scale(6),
    },
    outlineButton: {
      backgroundColor: colors.outlineButtonBg,
      borderWidth: 1,
      borderColor: colors.button,
    },
    outlineButtonText: {
      color: colors.black,
      fontWeight: '600',
    },
    buttonText: {
      fontWeight: '600',
    },
    buttonContainer: {
      rowGap: scale(14),
      marginTop: scale(12),
    },
    borderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: scale(12),
      marginTop: scale(18),
    },
    orText: {
      fontSize: FontSize.FONT_12Px,
      width: scale(15),
      color: colors.placeholder,
    },
    orBorder: {
      height: 1,
      flex: 1,
      backgroundColor: colors.border,
    },
    buttonStyle: {
      columnGap: scale(12),
      flexDirection: 'row',
    },
    iconButtonStyle: {
      backgroundColor: colors.outlineButtonBg,
      borderWidth: 1,
      borderColor: colors.button,
      flexDirection: 'row',
      columnGap: scale(8),
    },
    mt14: {
      marginTop: scale(14),
    },
    haveAccountContainer: {
      marginVertical: scale(4),
      alignItems: 'center',
    },
    dontHaveText: {
      color: colors.placeholder,
      fontWeight: '400',
    },
  });
