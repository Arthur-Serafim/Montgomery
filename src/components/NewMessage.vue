<template>
  <div class="new-message">
    <v-form>
      <v-text-field
        box
        label="Message (enter to add)"
        v-model="newMessage"
        @keypress.prevent.enter="addMessage"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
  import db from '@/firebase/init.js'

  export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
      return {
        newMessage: null
      }
    },
    methods: {
      addMessage() {
        if(this.newMessage) {
          db.collection('messages').add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          }).catch(err => {
            console.log(err)
          })
          this.newMessage = null
        }
      }
    },
  }
</script>