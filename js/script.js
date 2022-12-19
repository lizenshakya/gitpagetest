// Generating Character Codes For The Application 
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*";
const form = document.getElementById('passwordGeneratorForm');
// Checking the options that are selected and setting the password
document.getElementById('generate').addEventListener('click', (e) => {
  e.preventDefault();
  const characterAmount = document.getElementById('length').value;
  const password = generatePassword(
    characterAmount,
  );
  document.getElementById('result').innerText = password;
});

document.getElementById('clear').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('result').innerText = '';
  });

// The Password Generating Function
let generatePassword = (
  characterAmount,
) => {
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      string[Math.floor(Math.random() * string.length)];
    passwordCharacters.push(characterCode);
  }
  return passwordCharacters.join('');
};
