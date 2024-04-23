import {StyleSheet} from 'react-native';
import React from 'react';
import {themeColors, themeTokens} from '../../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
    borderBottomWidth: 0.5,
  },

  row: {
    marginTop: 8,
    flexDirection: 'row',
    flex: 1,
  },
  greenText: {
    color: themeColors.primary,
  },
  lightGray: {color: 'rgba(0, 0, 0, 0.6)'},
  marginLeft8: {
    marginLeft: 8,
  },
  imageStyle: {
    height: 100,
    width: 70,
  },
  textContainer: {flex: 1, marginLeft: 16},
  headingText: {
    color: themeColors.primary,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
  },
  text: {
    fontSize: themeTokens.fontSm,
    fontWeight: '500',
    color: themeColors.blackShade3,
    lineHeight: 16,
    marginLeft: 4,
  },
  textLeft: {
    marginLeft: 4,
  },
  offlineContainer: {
    backgroundColor: themeColors.darkGreen2,
    borderRadius: 4,
    width: 60,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offlineText: {
    color: themeColors.white,
    fontSize: themeTokens.fontSm,
    fontWeight: '500',
  },
  IconStyle: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
  connectLineIconStyle: {
    padding: 1,
    height: 8,
    width: 10,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  smallTextContainer: {
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer1: {
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 4,
  },
  labelText: {
    fontSize: themeTokens.fontSm,
    fontWeight: '300',
  },
});

export default styles;
