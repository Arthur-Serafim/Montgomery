<template>
  <v-toolbar 
    flat
    class="navbar"
  >
    <img src="@/logo.png" class="logo" alt="logo" height="45rem">
    <v-spacer></v-spacer>
    <v-btn 
      flat 
      large 
      v-if="chat" 
      @click="home"
      class="white--text"  
    >
      <v-icon class="mr-1">exit_to_app</v-icon>
      Log out  
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ['chat'],
  methods: {
    home() {
      this.$router.push({ name: 'Welcome'})
    }
  },
}
</script>

<style lang="scss">
  .navbar {
    background-color: #092856 !important;
  }
  .logo {
    align-self: center;
    display: flex;
  }
</style>
