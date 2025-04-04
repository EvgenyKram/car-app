import {colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';

export const createstyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    overLay: {
      flex: 1,
      paddingHorizontal: scale(18),
      justifyContent: 'space-between',
    },
    logoContainer: {
      backgroundColor: colors.white,
      padding: scale(12),
      alignSelf: 'flex-start',
      margin: scale(12),
      marginTop: scale(32),
      borderRadius: 100,
    },
    carLogo: {
      height: scale(36),
      width: scale(36),
    },
    textContainer: {
      marginTop: scale(30),
    },
    title: {
      color: colors.white,
      fontSize: FontSize.FONT_40Px,
    },
    buttonStyle: {
      marginBottom: scale(32),
    },
    buttonText: {
      fontWeight: '500',
    },
  });
