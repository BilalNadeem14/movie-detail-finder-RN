/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MainNavigator from './src/navigation/MainNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store';
import AppLogs from './src/components/AppLogger';
import {startNetworkLogging} from 'react-native-network-logger';
import {themeColors} from './src/utils/theme';
import {vh} from './src/utils/units';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    startNetworkLogging();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View
          style={[
            {backgroundColor: themeColors.blackShade4},
            Platform.OS === 'ios' && {height: 6 * vh},
          ]}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={themeColors.blackShade4}
          />
        </View>
        <MainNavigator />
      </NavigationContainer>
      <AppLogs />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
