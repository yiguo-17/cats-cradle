function challengeBanner(num){
  console.log('######### Challenge '+ num + ' #########');
}

function printvow(str){
  challengeBanner(1);
  const vow = 'aeiou';
  const len = str.length;
  let i = 0;
  while(i < len){
    if(vow.includes(str[i])){console.log(str[i]);}
    i++
  }
}
printvow("Regular expressions are for term 2.")

function fivevow(str){
  challengeBanner(2);
  const vow = 'aeiou';
  const len = str.length;
  let i = 0;
  let j = 0;
  while(i < len){
    while(j <= 5){
       if(vow.includes(str[i])){console.log(str[i]);j++;}
       i++;
    }
  }
  
}
fivevow("Regular expressions are for term 2.")