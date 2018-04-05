import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact'
import Cities from '../views/Cities'
import CityDetail from '../components/cities/CityDetail'
import ListDetail from '../components/lists/ListDetail'
import PlaceDetail from '../components/places/PlaceDetail'
import UserLists from '../components/lists/UserLists'
import NewList from '../components/lists/NewList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/cities',
      component: Cities
    },
    {
      path: '/cities/:citySlug',
      name: 'CityDetail',
      component: CityDetail
    },
    {
      path: '/lists/:username/:listSlug',
      name: 'ListDetail',
      component: ListDetail
    },
    {
      path: '/lists/new',
      name: 'NewList',
      component: NewList
    },
    {
      path: '/cities/:citySlug/places/:placeSlug',
      name: 'PlaceDetail',
      component: PlaceDetail
    },
    {
      path: '/lists/:username/',
      name: 'UserLists',
      component: UserLists
    }
  ]
})
