function generatePassword() {
    // Prompt for password criteria
    const includeLowercase = confirm("Include lowercase letters?");
    const includeUppercase = confirm("Include uppercase letters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecialChars = confirm("Include special characters?");
    
    // Prompt for password length
    let length;
    do {
        length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
    } while (isNaN(length) || length < 8 || length > 128);

    // Validate that at least one character type is selected
    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
        alert("Please select at least one character type.");
        return;
    }

    // Generate password based on criteria
    const password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);

    // Display or use the generated password
    alert("Generated Password: " + password);
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars) {
    let allCharacters = '';
    let password = '';

    if (includeLowercase) allCharacters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumeric) allCharacters += '0123456789';
    if (includeSpecialChars) allCharacters += '!@#$%^&*()-_+=<>?/';

    for (let i = 0; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    return password;
}