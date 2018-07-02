import Vue from "vue";
import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClRxZjp4WH3mOMMqerdBy3TxA99Ek8_MI",
    authDomain: "vue-crm-fede9.firebaseapp.com",
    databaseURL: "https://vue-crm-fede9.firebaseio.com",
    projectId: "vue-crm-fede9",
    storageBucket: "vue-crm-fede9.appspot.com",
    messagingSenderId: "91800392708"
});

export const db = firebaseApp.firestore();

export const collections = {
  contacts: db.collection("contacts")
};
