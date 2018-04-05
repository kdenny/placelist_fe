<template>
  <div class="col-md-8 col-md-offset-2">
    <h1 class="jumbotron">Test</h1>
    <city_list></city_list>
  </div>
</template>

<script>
  require('bootstrap-vue')
  import CitiesList from 'components/cities/CitiesList'

  export default {
    components: {
      city_list: CitiesList
    }
  }
</script>

<style>
</style>
