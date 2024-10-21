import  { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig'; // Make sure to import auth
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'; // Import signOut
import { db } from '../firebaseConfig'; // Import your Firestore db instance

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [user] = useAuthState(auth);
  const userId = user ? user.uid : null; // Get the user's ID from the authenticated user

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const docRef = doc(db, "users", userId); // Adjust collection name accordingly
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };

      fetchUserData();
    }
  }, [userId]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          {userData && (
            <>
              <p>Address: {userData.address}</p> {/* Assuming userData contains address */}
              <p>Phone Number: {userData.phoneNumber}</p> {/* Assuming userData contains phoneNumber */}
            </>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
