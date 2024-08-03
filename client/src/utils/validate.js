
export const checkValidData = (email, password , name) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    const nameRegex = /^[A-Z][a-z]*(?:[-' ][A-Z][a-z]*)*$/;
    const isNameValid = nameRegex.test(name);
  
   if(!isEmailValid) return "Email Id is not valid";
   if(!isPasswordValid) return "Password is not valid"
   if(!isNameValid) return "Name is not valid "
    return null;
};
  