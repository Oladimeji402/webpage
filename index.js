// pre loader start
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
//pre loader ends


const countElement = document.getElementById('count');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

let count = 0;

function increaseCount() {
  count++;
  countElement.textContent = count;
}

function decreaseCount() {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
}

plusButton.addEventListener('click', increaseCount);
minusButton.addEventListener('click', decreaseCount);




$(document).ready(function() {
  // Array of countries
  var countries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
      "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
      "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", 
      "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
      "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
      "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", 
      "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", 
      "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
      "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
      "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
      "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
      "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
      "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", 
      "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
      "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", 
      "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
      "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
      "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
      "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
      "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
      "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
      "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
      "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", 
      "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", 
      "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
      "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
      "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
      "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
      "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
      "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
      "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", 
      "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", 
      "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", 
      "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
      "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
      "United Kingdom", "United States", "Uruguay", "Uzbekistan", 
      "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
      "Zambia", "Zimbabwe"
  ];
  
  // Function to show country suggestions
  function showSuggestions() {
      var inputVal = $('#countryInput').val().toLowerCase();
      var suggestions = '';
      countries.forEach(function(country) {
          if (country.toLowerCase().startsWith(inputVal)) {
              suggestions += '<div class="border-top border-left border-right">' + country + '</div>';
          }
      });
      $('#countryList').html(suggestions);
      $('#countryList').toggleClass('d-none', suggestions === ''); // Hide/show list if no suggestions
  }
  
  // Event listener for input field
  $('#countryInput').on('input', function() {
      showSuggestions();
  });
  
  // Event listener for clicking on suggestions
  $(document).on('click', '#countryList div', function() {
      $('#countryInput').val($(this).text());
      $('#countryList').html('');
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   const loginForm = document.getElementById('loginForm');
//   const signupForm = document.getElementById('signupForm');
//   const switchToSignUpBtn = document.getElementById('switchToSignUp');

//   switchToSignUpBtn.addEventListener('click', function () {
//       loginForm.style.display = 'none';
//       signupForm.style.display = 'block';
//       switchToSignUpBtn.style.display = 'none'; // Hide the switch button after switching to sign up
//   });
// });








// login 
// Array to store user credentials
const users = [];

// Function to handle sign-up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the sign-up form
    const signupUsername = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('email').value.trim();
    const signupPassword = document.getElementById('signupPassword').value.trim();

    // Validate inputs
    if (signupUsername === '' || email === '' || signupPassword === '') {
        alert('Invalid input! Please fill out all fields.');
    } else {
        // Check if the username is already taken
        const userExists = users.some(user => user.username === signupUsername);

        if (userExists) {
            alert('Username already exists. Please choose another.');
        } else {
            // Store the credentials in the users array
            const user = {
                username: signupUsername,
                email: email,
                password: signupPassword
            };
            users.push(user);

            // Notify the user of successful sign-up
            alert('Sign-up successful! You can now log in.');

            // Clear the sign-up form
            document.getElementById('signupForm').reset();

            // Optionally switch back to the login form
            switchToLogin();
        }
    }
});

// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the login form
    const loginUsername = document.getElementById('username').value.trim();
    const loginPassword = document.getElementById('password').value.trim();

    // Validate inputs
    if (loginUsername === '' || loginPassword === '') {
        alert('Invalid input! Please enter username and password.');
    } else {
        // Check if the credentials exist in the users array
        const userExists = users.some(user => user.username === loginUsername && user.password === loginPassword);

        if (userExists) {
            alert('Login successful!');
            document.getElementById('Sulaimon').innerHTML = 'Welcome , ' + loginUsername + '!';

            // Hide the login/signup button
            document.querySelector('.gay-hover').style.display = 'none';

            // Display the contact icon
            const contactIcon = document.createElement('i');
            contactIcon.className = 'fa-solid fa-user';
            contactIcon.style.color = '#fff';
            contactIcon.style.cursor = 'pointer';
            contactIcon.style.marginTop = '0.5cm';
            contactIcon.addEventListener('click', showUserInfo);

            document.querySelector('.navbar-nav').appendChild(contactIcon);
        } else {
            alert('Invalid username or password.');
        }

        // Clear form fields after login attempt
        document.getElementById('loginForm').reset();
    }
});

// Function to show user info when contact icon is clicked
function showUserInfo() {
    let userInfo = '';
    users.forEach((user, index) => {
        userInfo += `User ${index + 1}:\nUsername: ${user.username}\nEmail: ${user.email}\n\n`;
    });

    alert(userInfo || 'No user information available.');
    
}

// Function to switch to the sign-up form
document.getElementById('switchToSignUp').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

// Optional: function to switch back to the login form after signing up
function switchToLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}



function toggleFlightOptions(selectedOption) {
    // Hide all sections initially
    document.getElementById('return-flight').style.display = 'none';
    document.getElementById('one-way-flight').style.display = 'none';
    document.getElementById('multi-city-flight').style.display = 'none';

    // Show the selected section
    if (selectedOption === 'return') {
        document.getElementById('return-flight').style.display = 'flex';
    } else if (selectedOption === 'one-way') {
        document.getElementById('one-way-flight').style.display = 'flex';
    } else if (selectedOption === 'multi-city') {
        document.getElementById('multi-city-flight').style.display = 'flex';
    }
}


// Function to check if the "About" section is in the viewport
window.addEventListener('scroll', function() {
    const luckSection = document.getElementById('luck');
    const sectionPosition = luckSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    // If the top of the section is within the visible screen area
    if (sectionPosition < screenPosition) {
        luckSection.classList.add('visible'); // Add the 'visible' class to trigger the animation
    } else {
        luckSection.classList.remove('visible'); // Remove the 'visible' class if you scroll away
    }
  });