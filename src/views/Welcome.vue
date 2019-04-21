<template>
  <v-app class="body">
    <Navbar/>
    <h1 class="display-2 text-md-center text welcome">Welcome.</h1>
    
    <v-container class="container container">
        <h2 class="mt-3 px-3 pt-3 text">Enter your name:</h2>
        <v-text-field 
          flat 
          box 
          label="Name"
          v-model="name"
          class="px-3 pt-3" 
          background-color="white" 
          @keypress.enter="enterChat"
        >
        </v-text-field>
        <p v-if="feedback" class="red--text px-3">{{ feedback }}</p>
        <v-btn 
          flat 
          large 
          class="mx-3 submit"
          @click="enterChat"
        >
          enter chat
        </v-btn>
    </v-container>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'Welcome',
    components: {
        Navbar
    },
    data() {
      return {
        name: null,
        feedback: null
      }
    },
    methods: {
      enterChat() {
        if(this.name) {
          this.$router.push({ name: 'Chat', params: { name: this.name }})
        } else {
          this.feedback = "You must enter a name to join"
        }
        this.name = null
      }
    }
  }
</script>

<style lang="scss">
  .container {
    padding-top: 8rem !important
  }
  .welcome {
    display: flex !important;
    align-self: center !important;
    padding-top: 12rem
  }
  .body {
    background-color: #30425C !important;
  }
  .text {
    font-weight: 300;
    font-family: 'Montserrat', sans-serif !important;
    color: #fff;
  }
  .submit {
    background-color: #AA73AB;
    color: #fff !important;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
    .container {
      margin-left: 0;
      margin-right: 0;
    }
  }
  
</style>
