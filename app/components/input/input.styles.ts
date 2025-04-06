import {colors} from './../../theme/colors';

import {StyleSheet} from 'react-native';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';

export const createstyles = () =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: scale(10),
      backgroundColor: colors.white,
      paddingVertical: scale(2),
      marginTop: scale(12),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: scale(12),
    },
    input: {
      fontSize: FontSize.FONT_13Px,
      fontWeight: '300',
      color: colors.black,
      paddingHorizontal: scale(12),
      paddingVertical: scale(12),
      flex: 1,
      marginLeft: scale(12),
    },
    eye: {
      height: scale(22),
      width: scale(22),
    },
  });
