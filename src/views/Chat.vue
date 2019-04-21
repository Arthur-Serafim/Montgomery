<template>
  <v-app class="body">
    <Navbar chat="true"/>
    <v-container>
      <v-container class="message_container">
        <div class="single_text py-2" v-for="message in messages" :key="message.id">
          <div class="name-header">
            <v-avatar color="white" size="30" class="ml-3 avatar">{{ message.name[0] }}</v-avatar>
            <h3 class="text name header pr-2">{{ message.name }}</h3>
            <h4 class="text date">{{ message.timestamp }}</h4>
          </div>
          <p class=" text message ml-3">{{ message.content }}</p>
          <hr class="horizontal_line">
        </div>
      </v-container>
      <NewMessage :name="name" />
    </v-container>
  </v-app>
</template>

<script>
  import db from '@/firebase/init'
  import NewMessage from '@/components/NewMessage'
  import Navbar from '@/components/Navbar'

  export default {
    name: 'Chat',
    props: ['name'],
    components: {
      Navbar,
      NewMessage
    },
    data() {
      return {
        messages: []
      }
    },
    created() {
      let ref = db.collection('messages').orderBy('timestamp')

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type == 'added') {
            let doc = change.doc
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              content: doc.data().content,
              timestamp: doc.data().timestamp
            })
          }
        })
      })
    }
  }
</script>

<style lang="scss">
  .avatar {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 1.5rem;
    margin-right: 1rem;

  }
  .body {
    background-color: #30425C !important;
  }
  .chat {
    padding-top: 8rem
  }
  .date {
    font-size: 1.2rem
  }
  .horizontal_line {
    padding-left: 0;
    padding-right: 0;
  }
  .name-header {
    align-items: center;
    display: flex;
  }
  .message {
    font-size: 1.5rem;
    padding-top: 1rem
  }
  .message_container {
    background-color: #092856;
    margin-top: 10rem
  }
  .name {
    font-size: 2rem
  }
  .single_text {
    transform: translateY(-5rem);
  }
  .text {
    color: #fff;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 300;
  }
</style>

