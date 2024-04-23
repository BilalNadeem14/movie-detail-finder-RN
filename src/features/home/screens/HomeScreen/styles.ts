import {themeColors, themeTokens} from '@utils/theme';
import {scaleFont, vh} from '@utils/units';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: themeColors.primary2,
    height: 9 * vh,
    borderBottomLeftRadius: 4 * vh,
    borderBottomRightRadius: 4 * vh,
    alignItems: 'center',
  },
  headerText: {
    color: themeColors.white,
    fontSize: scaleFont(themeTokens.fontLg),
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 2 * vh,
  },
  inputContainer: {
    backgroundColor: themeColors.white,
    marginHorizontal: 24,
  },
  inputStyle: {
    height: 40,
    borderRadius: 4,
    paddingLeft: 12,
    color: themeColors.black,
  },
});

export default styles;
