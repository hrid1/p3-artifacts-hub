import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //    user and loading
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //   useful funciton for auth
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const { data } = await axios.post(
          "http://localhost:5000/jwt",
          {
            email: currentUser.email,
          },
          {
            withCredentials: true,
          }
        );
        console.log(data);
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/logout",
          {},
          {
            withCredentials: true,
          }
        );
        console.log(data);
      }
    });
    return () => unSubscribe();
  });

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   authentication info
  const authInfo = {
    createUser,
    loginUser,
    logOut,
    user,
    loading,
    updateUserInfo,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
