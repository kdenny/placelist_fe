<template>
  <div class="counter-wrapper">
    <div v-if="cities">
      <div class="card" v-for="city in cities" v-on:click="goToCity(city)">
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script>
  import 'router'
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    cities() {
      return this.$store.state.cityList
    }
  },
  methods: {
    goToCity(city) {
      this.$router.push({ name: 'CityDetail', params: { citySlug: city.slug }})
    }
  },
  mounted() {
    this.$store.dispatch('getCities')
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
