import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase/config";
export const UserContext = createContext();
function Userprovider(props){
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setuser(user);
    });
  },[user]);
  return (
    <UserContext.Provider value={[user, setuser]}>
      {props.children}
    </UserContext.Provider>
  );
}
export default Userprovider
