
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8X4k_NZ4aKLwsXvB0IViv3c-w6EJv_A0",
  authDomain: "cogeb-property-sale-3f10a.firebaseapp.com",
  projectId: "cogeb-property-sale-3f10a",
  storageBucket: "gs://cojeb-property-sale-3f10a.appspot.com",
  messagingSenderId: "483531472357",
  appId: "1:483531472357:web:b1d4be16d4abbbf5cbc30c",
  measurementId: "G-85NW2J18MH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = app;
export const firebaseAnalytics = analytics;