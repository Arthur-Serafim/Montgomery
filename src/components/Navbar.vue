<template>
  <v-toolbar 
    flat
    fixed
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
      <span class="logout_label">Log out</span>  
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
    }
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

  @media only screen and (max-width: 600px) {
    .logout_label {
      display: none;
      visibility: hidden;
      margin-left: 1rem;
    }
  }
</style>
