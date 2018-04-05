<template>
  <div class="counter-wrapper">
    <div v-if="thisNeighborhood">
      <div class="card">
        {{ thisNeighborhood.name }}, {{ thisNeighborhood.city.name }}
        <h3>{{ thisCity.lists.length }} Lists</h3>
        <div class="card" v-for="list in thisCity.lists" v-on:click="goToList(list)">
          {{ list.title }} {{ list.slug }}
        </div>
        <h3>{{ thisCity.places.length }} Places</h3>
        <div class="card" v-for="place in thisCity.places" v-on:click="goToPlace(place)">
          {{ place.name }} {{ place.slug }}
        </div>
        <h3>{{ thisCity.neighborhoods.length }} Neighborhoods</h3>
        <div class="card" v-for="nb in thisCity.neighborhoods" v-on:click="goToNeighborhood(place)">
          {{ nb.name }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    thisCity() {
      return this.$store.state.currentCity
    }
  },
  methods: {
    goToList(list) {
      this.$router.push({ name: 'ListDetail', params: { username: list.author.username, listSlug: list.slug }})
    },
    goToPlace(place) {
      this.$router.push({ name: 'PlaceDetail', params: { citySlug: place.city.slug, placeSlug: place.slug }})
    }
  },
  mounted() {
    this.$store.dispatch('getCity', this.$route.params.citySlug)
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
