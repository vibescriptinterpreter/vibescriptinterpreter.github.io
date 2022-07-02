import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


const config = {
  apiKey: 'AIzaSyAqMvnYsDvxieX7p1zuvl4GJdyMvtBAdhg',
  authDomain: 'stellaj-dev.firebaseapp.com',
  projectId: 'tellaj-dev',
  storageBucket: 'tellaj-dev.appspot.com',
  messagingSenderId: '625232971827',
  appId: '1:625232971827:web:38f87a9f6c8a812d1f7b46',
};

const app = initializeApp(config, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});
export const db = getFirestore(app);

export const auth = getAuth();

export default app;
