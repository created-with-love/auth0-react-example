// src/components/signup-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
      style={{
        marginTop: '.5rem',
        marginRight: '10px',
      }}
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
