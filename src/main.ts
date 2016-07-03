import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyAXQJ-f5R8XKY6cBbtPcKtlMw3SQtA4nUE",
    authDomain: "anguf2.firebaseapp.com",
    databaseURL: "https://anguf2.firebaseio.com",
    storageBucket: "anguf2.appspot.com",
  })
]);

