 //Javascript form validation
 // Define the form elements 

 const form = document.querySelector('#registration-form'); 
 const nameInput = document.querySelector('#name-input'); 
 const emailInput = document.querySelector('#email-input'); 
 const mobileInput = document.querySelector('#mobile-input'); 
 const addressInput = document.querySelector('#address-input'); 
 const genderInputs = document.querySelectorAll('input[name="gender"]'); 
 const languageInputs = document.querySelectorAll('input[name="language"]'); 
 const interestSelect = document.querySelector('#interest-select'); 
 const stateSelect = document.querySelector('#state-select'); 
 
 // Define the error messages 
 
 const nameError = document.querySelector('#name-error'); 
 const emailError = document.querySelector('#email-error'); 
 const mobileError = document.querySelector('#mobile-error'); 
 const addressError = document.querySelector('#address-error'); 
 const genderError = document.querySelector('#gender-error'); 
 const languageError = document.querySelector('#language-error'); 
 const interestError = document.querySelector('#interest-error'); 
 const stateError = document.querySelector('#state-error'); 
 
 // Define the array to store registered users 

 const users = []; 

 // Define the function to check if a field is empty 

 const isEmpty = (value) => { 
    return value.trim() === ''; 
} 
 // Define the function to check if an email is valid 

const isEmail = (email) => { 
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
return re.test(String(email).toLowerCase());
 }
 
// Define the function to check if a mobile number is valid 
const isMobile = (mobile) => { 
const re = /^[0-9]{10}$/;
return re.test(String(mobile).toLowerCase()); 
} 
// Define the function to display an error message 

const showError = (errorElement, message) => { 
errorElement.textContent = message; 
errorElement.classList.add('error'); 
} 
// Define the function to remove an error message 
const removeError = (errorElement) => { 
errorElement.textContent = ''; 
errorElement.classList.remove('error');
 }

 // Define the function to handle form submission 
 const handleSubmit = (event) => { 
    event.preventDefault(); 
// Reset the error messages 
removeError(nameError); 
removeError(emailError);
removeError(mobileError); 
removeError(addressError); 
removeError(genderError); 
removeError(languageError);
removeError(interestError); 
removeError(stateError); 

// Get the form values 
const name = nameInput.value; 
const email = emailInput.value; 
const mobile = mobileInput.value; 
const address = addressInput.value; 
let gender = ''; 
genderInputs.forEach((input) => { 
if (input.checked) { 
    gender = input.value; }
 });
let languages = [];
languageInputs.forEach((input) => { 
if (input.checked) { 
    languages.push(input.value); 
}
}); 
const interests = Array.from(interestSelect.selectedOptions).map(option=>option.value); 
const state = stateSelect.value; 

// Validate the form values 
let isValid = true;
if (isEmpty(name)) { 
showError(nameError, 'Name is required');
isValid = false;
} 
if (!isEmail(email)) { 
showError(emailError, 'Email is invalid'); 
isValid = false; 
} 
if (!isMobile(mobile)) { 
showError(mobileError, 'Mobile number is invalid');
isValid = false; } 
if (isEmpty(address)) { 
showError(addressError, 'Address is required');
isValid = false;
}
if (gender === '') { 
showError(genderError, 'Gender is required'); 
isValid = false;
} 
if (languages.length === 0) {
showError(languageError, 'At leastone language is required'); 
isValid = false;
 } 
if (interests.length === 0) { 
showError(interestError, 'Area of interest is required'); 
isValid = false; }
if (state === '') {
showError(stateError, 'State is required');
isValid = false; } 
// Register the user if the form is valid 
if (isValid) { 
// Check if the user is already registered
const isRegistered = users.some((user) => { 
    return user.email === email;
 }); 
if (isRegistered) { 
    document.getElementById("error-message1").innerHTML="Oops You are already Registered!...";
    document.getElementById("success-message1").innerHTML="";
} 
else { 
// Add the user to the array of registered users 
const user = { 
    name: name, 
    email: email,
     mobile: mobile, 
     address: address, 
     gender: gender, 
     languages: languages, 
     interest: interests, 
     state: state }; 
     users.push(user); 
    document.getElementById("success-message1").innerHTML="Registration successful";
    document.getElementById("error-message1").innerHTML="";
    console.log(users) 
    form.reset(); 
    }
 } 
} 
 // Add event listener to the form 
form.addEventListener('submit', handleSubmit);