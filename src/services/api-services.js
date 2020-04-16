export default class apiService {

  _apiBase = 'https://rickandmortyapi.com/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllСharacter() {
    const res = await this.getResource('/character/');
    return res.results.map(this._transofrmCharacter);
  }

  async getСharacter(id) {
    const character = await this.getResource(`/character/${id}/`);
    return this._transofrmCharacter(character);
  }

  async getAllLocations() {
    const res = this.getResource(`/location/`);
    return res.results.map(this._transofrmLocation);
  }

  async getLocation(id) {
    const location = await this.getResource(`/location/${id}/`);
    return this._transofrmLocation(location);
  }

  async getAllEpisodes() {
    const res = await this.getResource(`/episode/`);
    return res.results.map(this._transofrmEpisode);
  }

  async getEpisode(id) {
    const episode = await this.getResource(`/episode/${id}/`);
    return this._transofrmEpisode(episode);
  }

  _transofrmСharacter = (character) => {
    return {
      id: character.id,
      image: character.image,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender
    };
  };

  _transofrmLocation = (location) => {
    return {
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      residents: location.residents,
      created: location.created
    };
  };
  
  _transofrmEpisode = (episode) => {
    return {
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      characters: episode.characters,
      created: episode.created
    };
  };
}