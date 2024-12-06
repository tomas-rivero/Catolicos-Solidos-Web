// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEpizNXI9ylBQ1M23eSJ216c9HGOZyFL0',
  authDomain: 'blogscs-252c1.firebaseapp.com',
  projectId: 'blogscs-252c1',
  storageBucket: 'blogscs-252c1.firebasestorage.app',
  messagingSenderId: '657339061998',
  appId: '1:657339061998:web:4827a8cd74230e4d9505ff',
  measurementId: 'G-Z95CTNZYJ2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
