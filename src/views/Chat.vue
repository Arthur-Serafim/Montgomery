<template>
  <v-app class="body">
    <Navbar chat="true"/>
    <v-container>
      <h2 class="text display-2 white--text pt-2 pl-2 chat">Chat along.</h2>
      <v-container class="message_container">
        <div class="single_text">
          <div class="name-header">
            <v-avatar color="white" size="30" class="avatar">{{ name[0] }}</v-avatar>
            <h3 class="text name header pr-2">Name</h3>
            <h4 class="text date">time</h4>
          </div>
          <p class="text message">message</p>
          <hr>
        </div>
      </v-container>
      <v-text-field 
        flat 
        box 
        label="Message"
        prepend-icon="add"
        class="pt-3"  
      >
      </v-text-field>
    </v-container>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    Navbar
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  .avatar {
    margin-right: 1rem;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 1.5rem;

  }
  .name-header {
    display: flex;
    align-items: center;
  }
  .name {
    font-size: 2rem
  }
  .date {
    font-size: 1.2rem
  }
  .message {
    font-size: 1.5rem;
    padding-top: 1rem
  }
  .body {
    background-color: #30425C !important;
  }
  .chat {
    padding-top: 8rem
  }
  .text {
    font-weight: 300;
    font-family: 'Montserrat', sans-serif !important;
    color: #fff;
  }
  .message_container {
    background-color: #092856;
    margin-top: 10rem
  }

  .single_text {
      transform: translateY(-5rem)
    }
</style>

