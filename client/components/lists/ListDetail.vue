<template>
  <div class="counter-wrapper">
    <div v-if="list">

      <div class="card">
        <h1>{{ list.title }}</h1>
        <div class="card" v-for="place in list.places" v-on:click="goToPlace(place)">
          {{ place.name }}
        </div>
        <add_place></add_place>
      </div>
    </div>
  </div>
</template>

<script>
  import AddPlace from './AddPlace'
export default {
  components: {
    add_place: AddPlace
  },
  computed: {
    list() {
      return this.$store.state.currentList
    }
  },
  mounted() {
    console.log(this.$route.params)
    this.$store.dispatch('getList', this.$route.params)
  },
  methods: {
    goToPlace(place) {
      this.$router.push({ name: 'PlaceDetail', params: { citySlug: place.city.slug, placeSlug: place.slug }})
    }
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