/// 1
function even(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } 
    let genap = '';
    for(let i=1; i<word.length; i+=2) {
        genap += word[i];
    }
    return genap;
}

/// 2
function count(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } else if(word === '') {
        return 0;
    } 
    let counter = 1;
    for (let i=0;i<word.length;i++) {
        if (word[i] === ' ' && word[i+1] !== ' ') {
            counter++;
        }
    }
    return counter;
}

/// 3
function countVowelAndConsonant(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } 
    let consonant = 0;
    let vowel = 0;
    for(let i=0;i<word.length;i++) {
        if (word[i] === 'a' || word[i] === 'i' || word[i] === 'u' || word[i] === 'e' || word[i] === 'o') {
            vowel++;
        } else {
            consonant++;
        }
    }
    return `Jumlah vokal: ${vowel}, Jumlah consonant: ${consonant}`;
}

/// 4
function reverseWord(word) {
    if (typeof word !== 'string') {
        return 'Error, tipe data bukan string'
    }
    let kebalikan = ''
    for (let i=word.length - 1; i >= 0; i--) {
        kebalikan += word[i];
    }
    return kebalikan;
}

/// 5
function palindrome(word) {
    if (word.length < 2) {
        return false;
    }
    return word === reverseWord(word);
}

/// 6
function exchangeCoin(number) {
    if (typeof number !== 'number') {
        return 'Error, tipe data bukan number';
    }
    let exchange = '';
    while (number > 0) {
        if (number - 1000 >= 0) {
            exchange += '1000, ';
            number -= 1000;
        } else if (number - 500 >= 0) {
            exchange += '500, ';
            number -= 500;
        } else if (number - 200 >= 0) {
            exchange += '200, ';
            number -= 200;
        } else if (number - 100 >= 0) {
            exchange += '100, ';
            number -= 100;
        } else if (number - 50 >= 0) {
            exchange += '50, ';
            number -= 50;
        } else if (number - 20 >= 0) {
            exchange += '20, ';
            number -= 20;
        } else if (number - 10 >= 0) {
            exchange += '10, ';
            number -= 10;
        } else if (number - 5 >= 0) {
            exchange += '5, ';
            number -= 5;
        } else if (number - 1 >= 0) {
            exchange += '1, ';
            number -= 1
        }
    }
    return exchange;
}

/// Helper Function untuk no 7 dan 8
function multiplyString(string, amount) {
    let result = "";
    for (let i=1; i<=amount; i++) {
      result += string;
    }
    return result;
}

/// 7
function asteriskLoop(number) {
    for(let i=1;i <= number; i++) {
        console.log(multiplyString("*", i));
    }
}

/// 8
function pyramidLoop(number) {
  let amountAsterisk = 1;
  for (let i=number; i>0; i--) {
    console.log(multiplyString(" ", i-1) + multiplyString("*", amountAsterisk));
    amountAsterisk += 2;
  }
}

/// 8 Bonus
function sortData(string) {
    let arrString = [];
    for (let i=0; i < string.length; i++) {
        arrString.push(string[i]);
    }

    function swapData(i, j) {
        if (arrString[i] > arrString[j]) {
            let temp = arrString[i];
            arrString[i] = arrString[j];
            arrString[j] = temp;
            return true;
        }
    }
    let loop = true;
    while (loop) {
        loop = false;
        let counter = 0;
        while (counter < arrString.length - 1) {
            if (swapData(counter, counter+1)) {
                loop = true;
            }
            counter++;
        }
    }
    string = "";
    for(let i=0; i < arrString.length; i++) {
        string += arrString[i];
    }
    return string;
}