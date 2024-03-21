import { createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "./asyncActions";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    next: null,
    previous: null,
    isLoading: false,
    error: false,
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemon.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPokemon.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.pokemon;
      state.previous = action.payload.previous;
      state.next = action.payload.next;
    });
  },
});

export const selectPokemon = (state) => state.pokemon;
export default pokemonSlice.reducer;
