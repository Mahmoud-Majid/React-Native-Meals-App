import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const { id } = action.payload;
            if (state.ids.includes(id)) {
                return state;
            }
            state.ids.push(id);
        },
        removeFavorite: (state, action) => {
            const { id } = action.payload;
            state.ids = state.ids.filter(favoriteId => favoriteId !== id);
        }
    }

});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;