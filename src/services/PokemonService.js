const BASE_URL = import.meta.env.VITE_APP_POKEMON_API + "pokemon";

class _PokemonService {
  get = (offset = 0) => fetch(BASE_URL + `?offset=${offset}&limit=10`).then(res => res.json());
  getById = (url) => fetch(url).then(res => res.json());
}

const PokemonService = new _PokemonService();

export default PokemonService;
