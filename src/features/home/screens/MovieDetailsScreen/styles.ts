import {StyleSheet} from 'react-native';
import React from 'react';
import {themeColors, themeTokens} from '../../../../utils/theme';
import {scaleHeight, vh, vw} from '@utils/units';

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.blackShade4,
    flex: 1,
    borderBottomWidth: 0.5,
  },
  image: {height: 50 * vh, width: 100 * vw, borderRadius: 0},
  closeButton: {
    height: scaleHeight(32),
    width: scaleHeight(32),
    backgroundColor: themeColors.blackShade3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    margin: 24,
  },
  closeIconStyle: {
    height: 20,
    width: 20,
    tintColor: 'white',
    borderRadius: 10,
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
  headingText: {
    color: themeColors.white,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 12,
  },
  GrayText: {
    fontSize: themeTokens.fontSm,
    fontWeight: '400',
    lineHeight: 16,
    marginLeft: 4,
    color: themeColors.white,
    backgroundColor: themeColors.grayPrimary,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  text: {
    fontSize: themeTokens.fontSm,
    fontWeight: '400',
    lineHeight: 16,
    color: themeColors.white,
  },
  ratingsText: {
    fontSize: themeTokens.fontSm,
    fontWeight: '400',
    lineHeight: 16,
    color: themeColors.transparent7,
  },
  castText: {
    fontSize: themeTokens.fontXSm,
    fontWeight: '400',
    lineHeight: 16,
    color: themeColors.transparent7,
  },
  textLeft: {
    marginLeft: 4,
  },
  offlineContainer: {
    backgroundColor: themeColors.darkGreen2,
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
  paddingTop10: {
    paddingTop: 10,
  },
  ratingsContainer: {
    backgroundColor: themeColors.blackShade2,
    width: vw * 45,
    paddingHorizontal: 8,
    marginTop: 8,
    borderRadius: 8,
  },
  paddingTop8: {
    paddingTop: 8,
  },
  paddingBottom8: {
    paddingBottom: 8,
  },
  rowContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
