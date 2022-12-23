import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBI21_HGKFZNEuzfPBbZfWTMqO8zD2Cmeg",
  authDomain: "watchapp-4eb1c.firebaseapp.com",
  projectId: "watchapp-4eb1c",
  storageBucket: "watchapp-4eb1c.appspot.com",
  messagingSenderId: "838796553745",
  appId: "1:838796553745:web:9bcd2e93ed347fd5e7cbb0",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
export { db, auth, storage };
