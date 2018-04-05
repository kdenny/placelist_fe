import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const state = {
  count: 0,
  urls: {
    cities: 'http://127.0.0.1:8000/cities/',
    cityDetail: 'http://127.0.0.1:8000/cities/',
    lists: 'http://127.0.0.1:8000/lists/'
  },
  cityList: null,
  currentCity: null,
  currentList: null,
  currentPlace: null,
  userLists: null
  //urlList: {
  //  dev: {
  //    cities: 'http://127.0.0.1:8000/cities'
  //  }
  //}
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  UPDATE_CITIES (state, cities) {
    state.cityList = cities
  },
  SELECT_CITY (state, city) {
    state.currentCity = city
  },
  SELECT_LIST (state, list) {
    state.currentList = list
  },
  SELECT_PLACE (state, place) {
    state.currentPlace = place
  },
  SET_USER_LISTS (state, lists) {
    state.userLists = lists
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  getCities ({ commit }) {
    Vue.http.get(state.urls.cities).then(response => {

      let data = response.body;
      commit('UPDATE_CITIES', data)
    });
  },
  getCity ({ commit }, slug) {
    let url = state.urls.cityDetail + slug
    Vue.http.get(url).then(response => {

      let data = response.body;
      commit('SELECT_CITY', data)

    });
  },
  getList ({ commit }, params) {
    console.log(params)
    let url = state.urls.lists + params.username + '/' + params.listSlug
    console.log(url)
    Vue.http.get(url).then(response => {

      let data = response.body;
      commit('SELECT_LIST', data)

    });
  },
  getPlace ({ commit }, params) {
    console.log(params)
    let url = state.urls.cities + params.citySlug + '/places/' + params.placeSlug
    console.log(url)
    Vue.http.get(url).then(response => {
      let data = response.body;
      commit('SELECT_PLACE', data)
    });
  },
  addToList ({ commit }, posto) {
    let url = state.urls.lists + posto.params.username + '/' + posto.params.listSlug + '/add/'
    console.log(url)
    Vue.http.post(url, posto.data).then(response => {

      let data = response.body;
      commit('SELECT_LIST', data)

    });
  },
  createList ({ commit }, posto) {
    let url = state.urls.lists
    console.log(url)
    Vue.http.post(url, posto).then(response => {

      let data = response.body;
      //commit('SELECT_LIST', data)
      let params = {
        username: data.author.username,
        listSlug: data.slug
      }
      router.push({ name: 'ListDetail', params: params})

    });
  },
  getUserLists ({ commit }, params) {
    console.log(params)
    let url = state.urls.lists + params.username
    console.log(url)
    Vue.http.get(url).then(response => {

      let data = response.body;
      commit('SET_USER_LISTS', data)

    });
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
