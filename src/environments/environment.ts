import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig: FirebaseOptions = {
  projectId: 'front-end-fgp0',
  appId: '1:611673738434:web:fa2dc0a1cd84d910c4bf5b',
  storageBucket: 'front-end-fgp0.appspot.com',
  apiKey: 'AIzaSyAfGqskWsHqMxbSQpOwG4YyHEKY2fWvHR8',
  authDomain: 'front-end-fgp0.firebaseapp.com',
  messagingSenderId: '611673738434',
  measurementId: 'G-1NVEPTCK4V',
};

// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const firestore = getFirestore(app);

export const environment = {
  production: false,
  //URL: "http://localhost:8080/",
  URL: 'https://back-end-yop0.onrender.com/',
  firebase: firebaseConfig,
};