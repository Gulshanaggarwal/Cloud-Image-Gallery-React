import React, { useContext } from "react";
import { UserContext } from "../../provider/provider";
function Profile() {
  const [user] = useContext(UserContext);
  return (
    <>
      {user && (
        <div className="profile-wrapper">
          <h3>Profile</h3>
          <div className="profile-main-items">
            <img src={user.photoURL} alt={user.displayName} />
            <p>{user.displayName} </p>
            <p>{user.email} </p>
          </div>
        </div>
      )}
    </>
  );
}
export default Profile;
