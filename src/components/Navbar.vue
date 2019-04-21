<template>
  <v-toolbar 
    app
    flat
    class="navbar"
  >
    <img src="@/logo.png" class="logo" alt="logo" height="45rem">
    <v-spacer></v-spacer>
    <v-btn flat huge color="white" v-if="chat">
      <v-icon class="mr-1">exit_to_app</v-icon>
      Log out  
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ['chat']
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
