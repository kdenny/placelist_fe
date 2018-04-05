<template>
  <div class="counter-wrapper">
    <div>
      <vue-google-autocomplete
        id="city"
        ref="org"
        classname="form-control"
        placeholder="Start typing"
        :types="'establishment'"
        v-on:placechanged="selectPlace"
      >
      </vue-google-autocomplete>
    </div>
  </div>
</template>

<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  components: {
    VueGoogleAutocomplete
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
      selectPlace(addressData, placeResultData, id) {
        console.log(placeResultData)
          let newPlace = {
            name: placeResultData.name,
            type: placeResultData.types[0],
            address: addressData.street_number + ' ' + addressData.route,
            state: addressData.administrative_area_level_1,
            latitude: addressData.latitude,
            longitude: addressData.longitude,
            google_id: placeResultData.url
          }
        if (addressData.locality) {
          newPlace.city = addressData.locality
        } else {
          placeResultData.address_components.forEach(a => {
            if (a.types[0] === 'sublocality_level_1') {
            newPlace.city = a.short_name
            }
          })
        }
        if (placeResultData.website) {
          newPlace.url = placeResultData.website
        }

        if (placeResultData.address_components[2].types[0] === 'neighborhood') {
            newPlace.neighborhood = placeResultData.address_components[2].short_name
          } else if (placeResultData.address_components[3].types[0] === 'neighborhood') {
            newPlace.neighborhood = placeResultData.address_components[3].short_name
          } else {
            newPlace.neighborhood = ''
        }

        let posto = {
          data: [newPlace],
          params: this.$route.params
        }

        console.log(posto)
        this.$refs["org"].$el.value = ''

        this.$store.dispatch('addToList', posto)

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