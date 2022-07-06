import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCE1Z-bD4Fw9qybqQXTDsO0VnpafCtAHnI',
  authDomain: 'dracodex-app.firebaseapp.com',
  projectId: 'dracodex-app',
  storageBucket: 'dracodex-app.appspot.com',
  messagingSenderId: '841049756231',
  appId: '1:841049756231:web:ee83883a151286ed11d762',
  measurementId: 'G-XDQSX68E6F',
}

export const fb_app = initializeApp(firebaseConfig)
export const fb_analytics = getAnalytics(fb_app)
