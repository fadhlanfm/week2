/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/
function partialCheck(str, partial) {
  //your code here
  var str = str.toUpperCase();
  var partial = partial.toUpperCase();

  
  var hardCounter = 0;
  for(i=0;i<str.length-partial.length+1;i++){
    var counter = 0;
    /*
    if(str[i]==partial[0] && str[i+1]==partial[1] && str[i+2]==partial[2]){
      counter = counter + 1;
    }
    */
   for(j=0;j<partial.length;j++){
     if(str[i+j]==partial[j]){
       counter = counter + 1;
     }
     if(counter/partial.length==1){
      hardCounter = hardCounter + 1;
     }
   }

  }

  if(hardCounter==0){
    hardCounter = 'not found';
  }
  
  return hardCounter;    
}
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found