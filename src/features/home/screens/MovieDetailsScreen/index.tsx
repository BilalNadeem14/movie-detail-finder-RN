import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {GetMovieDetailsResponse, useGetMovieDetailsQuery} from '@services/api';
import styles from './styles';
import {Icons} from '@assets/index';
import {themeColors} from '@utils/theme';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '@navigation/types';
import {vw} from '@utils/units';

export default function MovieDetailsScreen(props) {
  const {data}: {data: GetMovieDetailsResponse} = useGetMovieDetailsQuery(
    props.route.params.id,
  );
  const navigation = useNavigation<AppNavigationProps>();

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={data?.Poster ? {uri: data?.Poster} : Icons.defaultImage}
        style={styles.image}
        defaultSource={Icons.defaultImage}
        resizeMode="stretch">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={44}
          style={styles.closeButton}>
          <Image source={Icons.closeIcon} style={styles.closeIconStyle} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{flex: 1, marginHorizontal: 12}}>
        <Text style={styles.headingText} ellipsizeMode="tail" numberOfLines={2}>
          {data?.Title}
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{data?.Year}</Text>
          <Text style={styles.GrayText}>{data?.Rated}</Text>
          <Text style={styles.text}> {data?.Runtime}</Text>
          <Text style={styles.GrayText}>{data?.Type}</Text>
        </View>
        <Text style={[styles.text, styles.paddingTop10]}>{data?.Plot}</Text>
        <View style={styles.paddingTop8}>
          <Text style={styles.castText}>Cast: {data?.Actors}</Text>
        </View>
        <View style={[styles.ratingsContainer, styles.paddingTop8]}>
          {data?.Ratings?.map((item, index) => {
            return (
              <View
                style={[styles.rowRatingContainer, styles.paddingBottom8]}
                key={item.Source}>
                <Text style={[styles.castText]}>
                  {index == 0 ? 'IMDb' : item.Source}
                </Text>
                <Text style={[styles.castText]}>{item.Value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
