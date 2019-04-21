<template>
  <v-app>
    <Navbar/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  :root {
    font-size: 62.5% // So 1 rem = 10px
  }
</style>

