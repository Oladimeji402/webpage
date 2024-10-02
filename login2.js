let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// Array to store users
let users = [];

// Function for signing up
signupBtn.onclick = function() {
    let name = document.querySelector('input[placeholder="Name"]').value;
    let email = document.querySelector('input[placeholder="Email"]').value;
    let password = document.querySelector('input[placeholder="Password"]').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all the fields.");
    } else {
        // Store the user info in an object and push to the users array
        let user = { name: name, email: email, password: password };
        users.push(user);
        alert("You have successfully signed up!");
    }
    
    // Reset input fields after signup
    document.querySelector('input[placeholder="Name"]').value = "";
    document.querySelector('input[placeholder="Email"]').value = "";
    document.querySelector('input[placeholder="Password"]').value = "";
};

// Function for signing in
signinBtn.onclick = function() {
    let email = document.querySelector('input[placeholder="Email"]').value;
    let password = document.querySelector('input[placeholder="Password"]').value;

    if (email === "" || password === "") {
        alert("Please fill in both the email and password fields.");
    } else {
        // Check if the user exists in the array
        let userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
            alert("You have successfully signed in!");
        } else {
            alert("You have not signed up with us. Please sign up first.");
        }
    }

    // Reset input fields after signin
    document.querySelector('input[placeholder="Email"]').value = "";
    document.querySelector('input[placeholder="Password"]').value = "";
};

// Toggle between Sign Up and Sign In modes
signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};
