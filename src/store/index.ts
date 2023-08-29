import { createStore } from 'vuex'
import {getMovies} from "@/requests/requests";
interface MovieState {
  movies: object[]
  selectMovies: null | object
  isLastPageMoviesLoaded: boolean,
  page: number,
}

export default createStore<MovieState>({
  state: {
    movies: [],
    selectMovies: null,
    isLastPageMoviesLoaded: false,
    page: 0,
  },
  getters: {
    movies: state => state.movies,
    selectMovies: state => state.selectMovies || state.movies[2],
    isLastPageMoviesLoaded: state => state.isLastPageMoviesLoaded,
    page: state => state.page
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
    },

    setPage (state, value) {
      state.page = value
    }

  },
  actions: {
    downloadMovies ({commit, state}) {
      getMovies(state.page).then(res => {
        const data =res.data
        commit('setIsLastPageMoviesLoaded', data.pages === 1)
        commit('setMovies', data.results || [])
      }).catch(console.log)
    },

    downloadMoreMovies ({commit, state, getters}) {
      if (state.isLastPageMoviesLoaded) return null
      getMovies(getters.page + 1).then(res => {
        const data = res.data
        const movies = [...state.movies, ...data.results || []]
        commit('setIsLastPageMoviesLoaded', data.pages <= (getters.page + 2))
        commit('setMovies', movies)
        commit('setPage', getters.page + 1)
      }).catch(console.log)
    },
  },
  modules: {

  }
})
