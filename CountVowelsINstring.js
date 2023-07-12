function countVowels(str){
    var vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
}

var  string = 'Hello World!, My name is PRITAM SAHA';
var vowelCount = countVowels(string);
console.log(vowelCount); 