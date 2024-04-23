import {NavigationProp} from '@react-navigation/native';

export type MainStackParameterList = {
  AppNavigator: undefined;
};
export type AppStackParameterList = {
  HomeScreen: undefined;

  MovieDetailsScreen: {
    id: string;
  };
};

export type MainNavigationProps = NavigationProp<MainStackParameterList>;
export type AppNavigationProps = NavigationProp<AppStackParameterList>;
