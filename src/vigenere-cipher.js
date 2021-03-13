class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(text, key) {
    let resultIndex;
    let textChipher = "";
    let keyIndex = 0;
    text = text.toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < text.length; i++) {
    let  textSim = text[i];
      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }
      if (!this.alphabet.includes(textSim)) {
        textChipher += textSim;
      }else{

      let keyLetter = key[keyIndex];

      let keyChiperIndex = this.alphabet.indexOf(keyLetter);
      let letterChiperIndex = this.alphabet.indexOf(textSim);

    let  resultIndex = keyChiperIndex + letterChiperIndex;
      if (resultIndex >=26){
        resultIndex= resultIndex-26;
      }
      let encryptedLetter = this.alphabet[resultIndex];

      textChipher = textChipher + encryptedLetter ;

      keyIndex+=1;
    }
    }

    return (this.type === true) ?  textChipher.toUpperCase(): textChipher.toUpperCase().split('').reverse().join('') ;
  }

  decrypt(text, key) {
    let resultIndex;
    let textChipher = "";
    let keyIndex = 0;
    text = text.toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < text.length; i++) {
    let  textSim = text[i];
      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }
      if (!this.alphabet.includes(textSim)) {
        textChipher += textSim;
      }else{

      let keyLetter = key[keyIndex];

      let keyChiperIndex = this.alphabet.indexOf(keyLetter);
      let letterChiperIndex = this.alphabet.indexOf(textSim);

    let  resultIndex = letterChiperIndex - keyChiperIndex ;
      if (resultIndex <0){
        resultIndex= resultIndex+26;
      }
      let encryptedLetter = this.alphabet[resultIndex];

      textChipher = textChipher + encryptedLetter ;

      keyIndex+=1;
    }
    }

    return (this.type === true) ?  textChipher.toUpperCase(): textChipher.toUpperCase().split('').reverse().join('') ;
  }
}

module.exports = VigenereCipheringMachine;