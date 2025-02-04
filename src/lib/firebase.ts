import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpRQd7WHS6KEjhbSHzTJIx3ARr1WJyzjA",
  authDomain: "task-management-platform-266a6.firebaseapp.com",
  projectId: "task-management-platform-266a6",
  storageBucket: "task-management-platform-266a6.firebasestorage.app",
  messagingSenderId: "273345963717",
  appId: "1:273345963717:web:2695a0746775528894b2ac",
  measurementId: "G-22Z0JGLGXG",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
