import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'theme',
    initialState: {
        themeNumber: 0
    },
    reducers: {
        setTheme: (state, action) => {
            state.themeNumber = action.payload;
        }
    }
});

export const {setTheme} = slice.actions;

export const selectTheme = state => state.theme.themeNumber;

export default slice.reducer;