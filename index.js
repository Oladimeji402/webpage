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
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const switchToSignUpBtn = document.getElementById('switchToSignUp');

  switchToSignUpBtn.addEventListener('click', function () {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      switchToSignUpBtn.style.display = 'none'; // Hide the switch button after switching to sign up
  });
});