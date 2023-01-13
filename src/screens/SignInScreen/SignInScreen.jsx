import React from 'react';
import './SignInScreen.css';

const SignInScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password..." />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span onClick={register} className="signInScreen__link">
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
