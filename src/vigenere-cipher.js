const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if(!message || ! key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let countAlphabet = 26;
    let codeSymbolA = 'A'.charCodeAt(0);

    let result = [];
    let keyI = 0;

    message.split('').forEach((item, index) => {
      if (item.match(/[A-Z]/)) {
        let indexSymbol = message.charCodeAt(index) - codeSymbolA;
        let shift = key.charCodeAt(keyI % key.length) - codeSymbolA;

        result.push(String.fromCharCode(codeSymbolA + (indexSymbol + shift) % countAlphabet));
        keyI++;
      } else {
        result.push(item);
      }
    });

    return this.reverseCode ? result.join('') : result.reverse().join('');

  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || ! key) {
      throw new Error('Incorrect arguments!');
    }
    
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let countAlphabet = 26;
    let codeSymbolA = 'A'.charCodeAt(0);

    let result = [];
    let keyI = 0;

    encryptedMessage.split('').forEach((item, index) => {
      if (item.match(/[A-Z]/)) {
        let indexSymbol = encryptedMessage.charCodeAt(index) - codeSymbolA;
        let shift = key.charCodeAt(keyI % key.length) - codeSymbolA;

        const charCode = (indexSymbol - shift + countAlphabet) % countAlphabet + codeSymbolA;
        result.push(String.fromCharCode(charCode));
        keyI++;
      }
      else result.push(item);
    });

    return this.reverseCode ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
