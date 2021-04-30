export default function validateInfo(values) {
    let errors = {}; 

    if (!values.username.trim()) {
    errors.username = 'Please type your username';
  }

  if (!values.email) {
    errors.email = 'Please type your email ';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Please enter your password';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confirmPassword ) {
    errors.confirmPassword = 'Password is required';
  } else if (values.confirmPassword  !== values.password) {
    errors.confirmPassword  = 'Passwords do not match';
  }
  return errors;
}

    