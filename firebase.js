import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';

// TODO Google hashprints

const firebaseConfig = {
  apiKey: Constants.manifest.extra.firebase.apiKey,
  authDomain: Constants.manifest.extra.firebase.authDomain,
  projectId: Constants.manifest.extra.firebase.projectId,
  storageBucket: Constants.manifest.extra.firebase.storageBucket,
  messagingSenderId: Constants.manifest.extra.firebase.messagingSenderId,
  appId: Constants.manifest.extra.firebase.appId,
};

const isAppInitalized = getApps().length > 0;

const app = !isAppInitalized
  ? initializeApp(firebaseConfig)
  : getApp();

const auth = !isAppInitalized
  ? initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })
  : getAuth();

const db = getFirestore();

export { auth, db };
