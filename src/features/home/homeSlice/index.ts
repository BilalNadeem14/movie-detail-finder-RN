import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../../store'; //'../../app/store'

// Define a type for the slice state
interface HomeState {
  value: number;
}

// Define the initial state using that type
const initialState = {
  value: 0,
} satisfies HomeState as HomeState;

export const homeSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default homeSlice.reducer;

//This is a dummy slice setuo which can be transformed and used to store global state for the Home feature
