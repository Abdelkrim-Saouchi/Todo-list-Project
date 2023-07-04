// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDb78EYbCecYYbz9hj0u8a2PbVLQepH5rg',
  authDomain: 'todo-app-9cfea.firebaseapp.com',
  projectId: 'todo-app-9cfea',
  storageBucket: 'todo-app-9cfea.appspot.com',
  messagingSenderId: '1040900765802',
  appId: '1:1040900765802:web:a9e760356ed10a24157213',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const db = getFirestore(app);
