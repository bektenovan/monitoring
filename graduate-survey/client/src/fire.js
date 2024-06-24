// Импорт необходимых функций из модульного SDK Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Конфигурация вашего веб-приложения Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBK833lih55YiK5khVTgzXEjj59_f3m8T4",
  authDomain: "monitoring-e01a5.firebaseapp.com",
  projectId: "monitoring-e01a5",
  storageBucket: "monitoring-e01a5.appspot.com",
  messagingSenderId: "50568259626",
  appId: "1:50568259626:web:6f09edccad3d609477bb53"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
