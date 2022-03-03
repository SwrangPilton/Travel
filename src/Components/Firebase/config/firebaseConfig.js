import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: process.env.REACT_APP_FIREBASE_API_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const firebaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
            defaultCountry: 'IN'
        },
    ],
    signInSuccessUrl: '/account',
    credentialHelper: 'none'
}

export const auth = firebase.auth()