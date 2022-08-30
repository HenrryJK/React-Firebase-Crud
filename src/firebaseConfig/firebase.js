import { initializeApp } from "firebase/app";
// configuracion basica , para poder realizar la conexion con firebase


//importamos el firestore
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCzIVwtAOtBfUy2vhO7v2IN8P7O6LxJJlM",
  authDomain: "crud-firebase-react-63c90.firebaseapp.com",
  databaseURL: "https://crud-firebase-react-63c90-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-react-63c90",
  storageBucket: "crud-firebase-react-63c90.appspot.com",
  messagingSenderId: "963716800640",
  appId: "1:963716800640:web:23dfef2bb4d69617060665"
};


const app = initializeApp(firebaseConfig);

// funcion exportada para conectarnos a  la base de datos
export const db = getFirestore(app)