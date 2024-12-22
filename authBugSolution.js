let unsubscribe;

const authStateChanged = (auth) => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User is signed in:', uid);
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });
};

// Example usage (make sure to replace with your actual Firebase auth instance)
const auth = getAuth();
authStateChanged(auth);

// Cleanup the listener when component unmounts or when no longer needed
const cleanup = () => {
  if (unsubscribe) {
    unsubscribe();
    console.log('Unsubscribed from onAuthStateChanged');
  }
};

//Example of cleanup in a React component:
// useEffect(() => {
//   return cleanup;
// }, []);