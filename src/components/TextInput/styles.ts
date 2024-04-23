import {StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {themeColors} from '@utils/theme';

const useStyles = () => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        marginTop: 12,
      },
      inputContainter: {
        marginTop: 12,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 12,
        borderWidth: 1,
        borderColor: themeColors.gray,
      },
      inputStyle: {
        minHeight: 40,
        backgroundColor: themeColors.white,
        flex: 1,
        borderRadius: 4,
        paddingLeft: 12,
        color: themeColors.black,
      },

      labelText: {
        marginHorizontal: 4,
        marginTop: 16,
        color: themeColors.black,
      },
      requiredText: {
        color: themeColors.red,
      },
      errorText: {
        color: themeColors.red,
        marginLeft: 24,
        marginTop: 4,
      },
    });
  }, []);

  return styles;
};

export default useStyles;
