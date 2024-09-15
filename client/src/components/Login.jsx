import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null)
  const name = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate form data
    const message = checkValidData(email.current.value, password.current.value, name.current.name);
    setErrorMessage(message);
    if (message) return;

    //** */ Sign In / Sign Up
    if(!isSignInForm){
      // Sign Up logic
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('====================================');
        console.log(user);
        console.log('====================================');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
    
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}  className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-80">
        <h1 className="py-4 text-3xl text-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
       { ! isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Name"
          className="w-full p-4 my-4 bg-gray-700"
        />
        }
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700"
        />

        <p className="py-2 font-bold text-red-500">{errorMessage}</p>

        <button className="w-full p-4 my-6 bg-red-700 rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up now" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
