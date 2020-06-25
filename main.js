function challengeBanner(num){
  console.log('######### Challenge '+ num + ' #########');
}

function printVowel(str){
  challengeBanner(1);
  const vowel = 'aeiou';
  const len = str.length;
  let i = 0;
  while(i < len){
    if(vowel.includes(str[i])){console.log(str[i]);}
    i++
  }
}
printVowel("Regular expressions are for term 2.")

function fiveVowel(str){
  challengeBanner(2);
  const vowel = 'aeiou';
  const len = str.length;
  let i = 0; //counter for string
  let j = 0; //counter for vowels
  while(i < len){
       if(vowel.includes(str[i])){
          console.log(str[i]);
          j++;
       } 
       i++; 
      if(j ===5){break}
    }
  }
fiveVowel("Regular expressions are for term 2.")
fiveVowel("Hello!")

function everyThird(str){
  challengeBanner(3);
  const len = str.length;
  let i = 2;
  while(i < len){
    console.log(str[i]);
    i = i + 3;
  }
}
everyThird("I am the alfalfa and the omelette.");

function fourFrom(str,num){
  challengeBanner(4);
  let i = num
  const len = str.length;
  if((num + 4) > len){
    while(i < len){
      console.log(str[i]);
      i++;
    }
  }
  else{while(i < (num+4)){
    console.log(str[i]);
    i++;
  }

  }
}
const notice = "Oh hi, I didn't see you there. Welcome."
fourFrom(notice, 4);
fourFrom(notice, 36)

function whereIsU(str){
  challengeBanner(5);
  let i = 0;
  const len = str.length;
  while (i < len){
    if(str[i] === 'u'){console.log(i)}
    i++;
  }
}

const argue = 'You picked the wrong house, bub.';
whereIsU(argue)

function firstU(str){
  challengeBanner(6);
  let i = 0;
  let us = [];
  const len = str.length;
  while (i < len){
    if(str[i] === 'u'){us = us.concat(i)}
    i++;
  }
  console.log(us[0]);
}

firstU(argue)

function uOrNothing(str){
  challengeBanner(7);
  let i = 0;
  let us = [];
  const len = str.length;
  while (i < len){
    if(str[i] === 'u'){us = us.concat(i)}
    i++;
  }
  if(us.length === 0){console.log(-1);}
  else {console.log(us[0]);}
}

uOrNothing(argue)
const nation = "I'm Canadian.";
uOrNothing(nation) ;