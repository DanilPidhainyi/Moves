import { createStore } from 'vuex'
import {getMovies} from "@/requests/requests";
interface MovieState {
  movies: object[]
  selectMovies: null | object
  isLastPageMoviesLoaded: boolean
}

export default createStore<MovieState>({
  state: {
    movies: [],
    selectMovies: null,
    isLastPageMoviesLoaded: false,
  },
  getters: {
    movies: state => state.movies,
    selectMovies: state => state.selectMovies || state.movies[2],
    isLastPageMoviesLoaded: state => state.isLastPageMoviesLoaded
  },
  mutations: {
    setMovies (state, movies) {
      state.movies = movies
    },

    setIsLastPageMoviesLoaded (state, value) {
      state.isLastPageMoviesLoaded = value
    },

    setSelectMovies (state, movie) {
      state.selectMovies = movie
    }

  },
  actions: {
    downloadMovies ({commit}) {
      getMovies().then(res => {
        const data =res.data
        commit('setIsLastPageMoviesLoaded', data.pages === data.total)
        commit('setMovies', data.results || [])
      }).catch(console.log)
    }
  },
  modules: {

  }
})
