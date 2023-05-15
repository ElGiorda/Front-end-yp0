import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfGqskWsHqMxbSQpOwG4YyHEKY2fWvHR8",
  authDomain: "front-end-fgp0.firebaseapp.com",
  projectId: "front-end-fgp0",
  storageBucket: "front-end-fgp0.appspot.com",
  messagingSenderId: "611673738434",
  appId: "1:611673738434:web:fa2dc0a1cd84d910c4bf5b",
  measurementId: "G-1NVEPTCK4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);