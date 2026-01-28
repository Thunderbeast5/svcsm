import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCfrUIGJTOst4nFxMBw6HQelyfo0Px1UjI',
  authDomain: 'svcsm-c2af4.firebaseapp.com',
  projectId: 'svcsm-c2af4',
  storageBucket: 'svcsm-c2af4.firebasestorage.app',
  messagingSenderId: '403701537460',
  appId: '1:403701537460:web:e14ee68b30725f2d6315e1',
  measurementId: 'G-QCF349S4D2',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
