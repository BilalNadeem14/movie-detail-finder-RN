import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useCallback} from 'react';
import ListItem from '../../components/ListItem';
import {MovieItemType} from '@services/api';
import styles from './styles';
import TextInputComponent from '@components/TextInput';
import {Search} from '@assets/index';
import {themeColors} from '@utils/theme';
import useBusinessLogic from '@features/home/hooks/useBusinessLogic';

export default function HomeScreen() {
  const {
    moviesList,
    onEndReached,
    onRefresh,
    onSearch,
    searchText,
    setSearchText,
    isFetching,
    isLoadingMore,
    error,
  } = useBusinessLogic();

  const onChangeText = useCallback(
    (text: string) => {
      setSearchText(text);
      onSearch(text);
    },
    [setSearchText, onSearch],
  );

  const renderItem = useCallback(
    (item: {item: MovieItemType}) => <ListItem item={item.item} />,
    [],
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Movies Database</Text>
      </View>
      <TextInputComponent
        value={searchText}
        placeholder="Search Movie/Tv Show"
        required={true}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        LeftIcon={Search}
        inputContainer={styles.inputContainer}
        error={error}
      />
      <View style={{flex: 1}}>
        <FlatList
          data={moviesList ?? []}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.imdbID}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={onRefresh}
              tintColor={themeColors.primary}
            />
          }
          ListFooterComponent={() => isLoadingMore && <ActivityIndicator />}
        />
      </View>
    </View>
  );
}
