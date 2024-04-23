import AsyncStorage from '@react-native-async-storage/async-storage';
import homeSlice from '../features/home/homeSlice';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {movieApi} from '../services/api';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({
  home: homeSlice,
  [movieApi.reducerPath]: movieApi.reducer,
});

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [movieApi.reducerPath],
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(movieApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
