// /^\S+@\S+\.\S+$/.test(data.email)
const validate = (data , type) => {
  const error = {};
  
  if (!data.email) {
    error.email = "Email required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    error.email = "Email address is invalid";
  } else {
    delete error.email;
  }
  
  if (!data.password) {
    error.password = "Password required";
  } else if (data.password.length < 8) {
    error.password = "Password need to be more than 8 character";
  } else {
    delete error.password;
  }
  
  if(type === 'signin'){
    if (!data.username.trim()) {
      error.username = "Username required";
    } else {
      delete error.username;
    }
    if (data.number.indexOf(0) !== 0 && data.number.indexOf(1) !== 9) {
      error.number = "Number is not for Iran";
    } else {
      delete error.number;
    }
    if (!data.confirmpassword) {
      error.confirmpassword = "Confirm your password";
    } else if (data.confirmpassword !== data.password) {
      error.confirmpassword = "Your confirm is not match";
    } else {
      delete error.confirmpassword;
    }
    if (data.isAccepted) {
      delete error.isAccepted;
    } else {
      error.isAccepted = "Accept our regulation";
    }
  }
  return error
};
export default validate
