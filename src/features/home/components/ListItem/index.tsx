import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import styles from './useStyles';
import {MovieItemType} from '@services/api';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '@navigation/types';

const ListItem = ({item}: {item: MovieItemType}) => {
  const navigation = useNavigation<AppNavigationProps>();

  const onPress = () => {
    navigation.navigate('MovieDetailsScreen', {
      id: item.imdbID,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, styles.row]}>
        <Image
          source={{uri: item.Poster}}
          style={styles.imageStyle}
          borderRadius={8}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text
            style={styles.headingText}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {item.Title}
          </Text>
          <View style={styles.smallTextContainer}>
            <Text style={styles.text}>{item.Type}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>{item.Year}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
