const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const codeBtn = document.getElementById('code-btn');

let isEncoded = false;

codeBtn.addEventListener('click', () => {
  const text = inputText.value;
  if (isEncoded) {
    outputText.value = decodeText(text);
    codeBtn.textContent = 'Codificar';
    isEncoded = false;
  } else {
    outputText.value = encodeText(text);
    codeBtn.textContent = 'Descodificar';
    isEncoded = true;
  }
});

function encodeText(text) {
  const shift = 3; // Deslocamento de 3 posições no alfabeto
  let encoded = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        // Letras maiúsculas
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Letras minúsculas
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    encoded += char;
  }
  return encoded;
}

function decodeText(text) {
  const shift = 3; // Deslocamento de 3 posições no alfabeto
  let decoded = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        // Letras maiúsculas
        char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Letras minúsculas
        char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      }
    }
    decoded += char;
  }
  return decoded;
}
