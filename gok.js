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

            // Hide the login/signup button
            document.querySelector('.gay').style.display = 'none';

            // Display the contact icon
            const contactIcon = document.createElement('i');
            contactIcon.className = 'fa-solid fa-address-book fa-lg';
            contactIcon.style.color = '#fff';
            contactIcon.style.cursor = 'pointer';
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




// login 2\
const users2 = [];

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

            // Hide the login/signup button
            document.querySelector('.gay').style.display = 'none';

            // Display the contact icon
            const contactIcon = document.createElement('i');
            contactIcon.className = 'fa-solid fa-address-book fa-lg';
            contactIcon.style.color = '#fff';
            contactIcon.style.cursor = 'pointer';
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


/**************************************************************************************************************************************** */

//nav scroll
window.addEventListener('scroll', () => {
 if (scrollY > 50) {
    navBar.classList.add("");
 }
  else{
    navBar.classList.remove("");
  }
})