import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async(user) => {
        


        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
          setUserProfile(docSnap.data());
        }else{
          console.log("user login failedd")
        }
    });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogOut = async() => {
    try{
      await auth.signOut();
      navigate("/login");
      console.log("user logout successful");
    }catch(error){
      console.log("logout error", error.message)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      {userProfile ? (
        <div className="shadow-2xl rounded-md flex flex-col gap-4 text-lg border border-purple-600 p-10">
          <div className="flex gap-2 justify-center pb-6">
            <p className="font-bold">Welcome </p>
            <p className="text-purple-600 uppercase font-bold">{userProfile.firstName}</p>
          </div>

          <div className="flex gap-2 font-bold">
            <p>Email: </p>
            <p className="text-purple-600 capitalize font-bold">{userProfile.email}</p>
          </div>

          <div className="flex gap-2 font-bold">
            <p>First Name: </p>
            <p className="text-purple-600 capitalize font-bold">{userProfile.firstName}</p>
          </div>

          <div className="flex gap-2 font-bold pb-6">
            <p>Last Name: </p>
            <p className="text-purple-600 capitalize font-bold">{userProfile.lastName}</p>
          </div>
    

          <div className="flex justify-center"><button className="px-8 py-2 font-bold rounded-md active:bg-purple-600 active:text-white border border-purple-600" onClick={handleLogOut}>LogOut</button></div>
        </div>
      ) : (
        <p className="shadow-2xl border  border-purple-600 text-purple-600 font-bold px-10 py-4">Loading ...</p>
    )}
    </div>
  );
}

export default Profile;