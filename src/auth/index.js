import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";
import { useEffect } from "react";
const db = getDatabase();
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    await set(push(ref(db, "users")), {
      name: response.user.displayName,
      email: response.user.email,
      image: response.user.photoURL,
      id: response.user.uid,
    });
    return response.user;
  } catch (error) {
    return error;
  }
};

export const logOut = async () => {
  try {
    localStorage.removeItem("userInfo");
    return await signOut(auth);
  } catch (error) {
    return error;
  }
};
