
import React ,{useEffect,useState,useContext}from 'react'
import {auth} from '../firebase/config'
import {UserContext} from '../provider/provider'
import { Redirect } from "react-router-dom"


function Logout(){

    const [user] = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);
  if (redirect) {
    return <Redirect to={redirect} />;
  }


    function handleSignout(){
        auth.signOut().then(() => {

          }).catch((error) => {
            // An error happened.
          });
          

    }
    return(
        <div className="logout-wrapper" >
            <button className='logout-button' onClick={handleSignout}>Logout</button>
        </div>
    )
}
export default Logout