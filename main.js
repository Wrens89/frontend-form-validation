// Sla de referenties op naar de inputvelden
const usernameInput = document.getElementById('input-username');
const passwordInput = document.getElementById('input-password');

// Sla de referenties op naar de warning-messages
const usernameWarning = document.getElementById('username-warning');
const passwordWarning = document.getElementById('password-warning');

// Voeg eventlisteners toe op de inputvelden
usernameInput.addEventListener('keyup', checkUsername);
passwordInput.addEventListener('keyup', checkPassword);

// Maak een functie die de username-input checkt en door de event listener wordt aangeroepen
function checkUsername(e) {

    // Wanneer de waarde een @ bevat willen we de melding WEL tonen
    if (e.target.value.includes('@')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten.';
    } else {
        // In alle andere gevallen tonen we de melding NIET
        usernameWarning.textContent = '';
    }
}

// Maak een functie die de password input checkt en door de event listener wordt aangeroepen
function checkPassword(e) {
    // Als het invoerveld leeg is, of wanneer het wachtwoord lang genoeg is willen we de melding NIET tonen
    if (e.target.value === '' || e.target.value.length > 6) {
        passwordWarning.textContent = '';
    } else {
        // In alle andere gevallen (e.target.value !== '' && e.target.value.length <= 6) tonen we de melding WEL
        passwordWarning.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens.'
    }
}