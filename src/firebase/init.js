import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyDdQAvsNGdS2VzvMg32GE7d3v6vFrsGXBI",
  authDomain: "live-chat-deee4.firebaseapp.com",
  databaseURL: "https://live-chat-deee4.firebaseio.com",
  projectId: "live-chat-deee4",
  storageBucket: "live-chat-deee4.appspot.com",
  messagingSenderId: "325991841190"
};

const firebaseApp = firebase.initializeApp(config);
firebaseAoo.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()