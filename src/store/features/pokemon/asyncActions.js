import { createAsyncThunk } from "@reduxjs/toolkit";
import PokemonService from "../../../services/PokemonService";

const timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getPokemon = createAsyncThunk(
  "pokemon/get",
  async (offset, { rejectWithValue }) => {
    try {
      const { results, previous, next } = await PokemonService.get(offset);

      await timeout(800);

      const detailsData = results.map(async (item) => {
        const preFetchData = await PokemonService.getById(item.url);
        return preFetchData
      });
    
      const pokemon = (await Promise.all(detailsData)).map((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites["front_default"],
        types: data?.types?.map(item => item?.type?.name),
        weight: data.weight
      }));

      return { pokemon, previous, next}
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
