import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'; // Import initialized auth from firebase.js
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  updateEmail as firebaseUpdateEmail, 
  updatePassword as firebaseUpdatePassword, 
  onAuthStateChanged 
} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // new register function
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login function
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // logout function
  function logout() {
    return signOut(auth);
  }

  // reset password function
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // update email function
  function updateEmail(newEmail) {
    return firebaseUpdateEmail(currentUser, newEmail);
  }

  // update password function
  function updatePassword(newPassword) {
    return firebaseUpdatePassword(currentUser, newPassword);
  }

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Clean up subscription
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
