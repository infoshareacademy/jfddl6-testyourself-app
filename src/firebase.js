import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDOh-P4wodZdRr3tlHwp155m85LJnmLIxQ",
  authDomain: "test-yourself-95f1a.firebaseapp.com",
  databaseURL: "https://test-yourself-95f1a.firebaseio.com",
  projectId: "test-yourself-95f1a",
  storageBucket: "test-yourself-95f1a.appspot.com",
  messagingSenderId: "899537420126"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
