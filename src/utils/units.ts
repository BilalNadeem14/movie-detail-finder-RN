import {useCallback, useLayoutEffect, useState} from 'react';
import {Dimensions, PixelRatio, Platform} from 'react-native';
export const vh = Dimensions.get('window').height * 0.01;
export const vw = Dimensions.get('window').width * 0.01;
export const fullScreenWidth = Dimensions.get('window').width;

const screenWidth = vw < vh ? vw : vh;
const screenHeight = vh > vw ? vh : vw;

const guidelineBaseWidth = 390; //350;
const guidelineBaseHeight = 844; //680;
const avgGuideLine = (100 / guidelineBaseWidth + 100 / guidelineBaseHeight) / 2;
const screenSize = Math.sqrt(vw * vh) / 100;

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export const widthPercentageToDP = wp => {
  const widthPercent = wp;
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((fullScreenWidth * elemWidth) / 100);
};

export const useOrientationHook = () => {
  const [metrics, setMetrics] = useState({
    width: isPortrait() ? vw : vh,
    height: isPortrait() ? vh : vw,
  });
  const updateStyle = useCallback(() => {
    Dimensions.addEventListener('change', () => {
      setMetrics({
        width: isPortrait() ? vw : vh,
        height: isPortrait() ? vh : vw,
      });
    });
  }, []);

  return [metrics, updateStyle];
};
export const scaleWidth = (px: number) => {
  // return px;
  // return PixelRatio.getPixelSizeForLayoutSize(px * (100 / guidelineBaseWidth));
  return (100 / guidelineBaseWidth) * px * screenWidth;
};
export const scaleHeight = (px: number) => {
  return (100 / guidelineBaseHeight) * px * screenHeight;
};
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleWidth(size) - size) * factor;
export const moderateScaleVertical = (size: number, factor = 0.5) =>
  size + (scaleHeight(size) - size) * factor;
export const scale = () => {
  return;
  // return px;
  // return PixelRatio.getPixelSizeForLayoutSize(px * (100 / guidelineBaseWidth));
  // return Math.round(PixelRatio.roundToNearestPixel(scaleWidth(px)));
  // return moderateScale(px);
  // return moderateScaleVertical(px);
};

export const scaleFont = (px: number) => {
  return px;
};

export {widthPercentageToDP as wp};
