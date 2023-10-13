import React, { useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
function Googlelogin() {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <div className="container">
      <GoogleOAuthProvider clientId="864882112616-gn0h71krsgrbk6j5b5jpssmj11q3bat1.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            setUserDetails(details); // Store user details in state
            console.log(details)
          }}
          onError={() => {
            console.log('Login Failed');
          }} 
        />
      </GoogleOAuthProvider>

      {/* Display user details if available */}
      {userDetails && (
        <div className="user-details">
          <h2>User Details:</h2>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {userDetails.picture && (
            <div>
              <p>Profile Picture:</p>
              <img src={userDetails.picture} alt="Profile" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Googlelogin;
