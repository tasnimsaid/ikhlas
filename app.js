// function countWords() {

// let text = document.getElementById("text").value;
// let wordsCounts = text.split(" ").length;


// document.getElementById("best4").innerHTML=wordsCounts;

// }

// // const words = text => {

// return text.split('/\S+/').length ;

// };




// //best code lettre
// let textWithoutSpace = text.replace(/\s/g, '');
// let arrayOfLetters = textWithoutSpace.split("");


// function countWord() {
// let counts = {};
// let text = document.getElementById("text").value;
// let wordsCount = text.split(" ").length;

// let textWithoutSpace = text.replace(/\s/g, '');
//  let arrayOfLetters = textWithoutSpace.split("");


// document.getElementById("best3").innerHTML=wordsCount;

// }








function countWord3(){


   // let text3 = document.getElementById("text3").value;

   // text3 =text3.trim();
   // var words = text3.split(" ");
   // var wordCount = 0;
   
   // document.getElementById("best43").innerHTML=wordCount; 




   let text3 = document.getElementById("text3").value;

text3 =text3.trim();
var words = text3.split(" ");
// var harakats = text3.split(" ");
var wordCount = words.length;

document.getElementById("best43").innerHTML=wordCount; 

   

//  let words = text3.split(" ").length ;

   
// document.getElementById("best43").innerHTML=wordCount; 
  

let Counter31 = 0 ;
let Counter32 = 0 ;
let Counter33 = 0 ;
let Counter34 = 0 ;

 let Counter35 = 0 ;
 let Counter36 = 0 ;

let Counter310 = 0 ;

let Counter311 = 0 ;
let Counter312 = 0 ;
let Counter313 = 0 ;

let Counter316 = 0 ;

let Counter318 = 0 ;

let Counter322 = 0 ;






let allsenda ;


let Counter800 = 0;
let Counter801 = 0;
let Counter802 = 0;
let Counter803 = 0;
let Counter804 = 0;





let alif3 = ['ا','أ','إ','آ'];



let laa3 = ['ل'];
let haa3 = ['ح'];
let mim3 = ['م'];
let dal3 = ['د'];
let haae3 = ['ه' ,'ة'];

let yaa3 = ['ي','ى','ئ'];
 let noon3 = ['ن'];
let kaf3 = ['ك'];
let ouaou3 = ['و','ؤ'];


let saad3 = ['ص'];

let ppaf3 = ['ق'];

let faa3 = ['ف'];


let damma = ["ُ","ٌ"];
let fatha = ["َ","ً"];
let kasra = ["ِ","ٍ"];
let chida = ["ّ"];
let sokoune = ["ْ"];




for (const harakat of words) {
   if (harakat.match(/[^\u0600-\u06FF]/)) {
     continue;
   }
 
   // letterCounts.set(harakat, letterCounts.get(letter) || 0);
   // letterCounts.set(harakat, letterCounts.get(letter) + 1);
 }
 



for(ch of text3) {

  
   // var ch = text3.charAt(ch);
   // if (text3.match(/[^\u0600-\u06FF]/)) {
   //    continue;
   //  }
    if (alif3.includes(ch)){
      Counter31++
  
  
  }   if (laa3.includes(ch)){
    Counter32++
 }

 if (haa3.includes(ch)){
   Counter33++
}

if (mim3.includes(ch)){
   Counter34++
   
}

if (dal3.includes(ch)){
   Counter35++
}

if (haae3.includes(ch)){
   Counter36++
}


if (yaa3.includes(ch)){
   Counter310++
}

if (noon3.includes(ch)){
   Counter311++
}


if (kaf3.includes(ch)){
   Counter312++
}


if (ouaou3.includes(ch)){
   Counter313++
}








if (saad3.includes(ch)){
   Counter316++
}




if (ppaf3.includes(ch)){
   Counter318++
}




if (faa3.includes(ch)){
   Counter322++
}






else if (damma.includes(ch)) {
   Counter800++

    } else if (fatha.includes(ch)) {
      Counter801++

    } else if (kasra.includes(ch)) {
      Counter802++

    } else if (sokoune.includes(ch)) {
      Counter803++
  
    
  }else if (chida.includes(ch)) {
   Counter804++

 }
}








let harakatm = Counter800 * 5 + Counter801 * 4 + Counter802 * 3 + Counter803 * 6 + Counter804 * 8 ;

 document.getElementById("damma").innerHTML = Counter800 ;
 document.getElementById("fatha").innerHTML = Counter801 ;
 document.getElementById("kasra").innerHTML = Counter802 ;
 document.getElementById("sokoune").innerHTML = Counter803 ;
 document.getElementById("chida").innerHTML = Counter804 ;

 
 document.getElementById("dammax").innerHTML = Counter800 * 5 ;   
 document.getElementById("fathax").innerHTML = Counter801 * 4;
 document.getElementById("kasrax").innerHTML = Counter802 * 3 ;
 document.getElementById("sokounex").innerHTML = Counter803 * 6;
 document.getElementById("chidax").innerHTML = Counter804 * 8 ;
 document.getElementById("harakatm").innerHTML = harakatm ;
 document.getElementById("xharakatm").innerHTML = harakatm ;      
   


document.getElementById("alif3").innerHTML=Counter31;
document.getElementById("alif13").innerHTML=Counter31*5;

document.getElementById("laa3").innerHTML=Counter32;
document.getElementById("laa23").innerHTML=Counter32*2;

document.getElementById("haa3").innerHTML=Counter33;
document.getElementById("haa33").innerHTML=Counter33*6;

document.getElementById("mim3").innerHTML=Counter34;
document.getElementById("mim43").innerHTML=Counter34*9;

document.getElementById("dal3").innerHTML=Counter35;
document.getElementById("dal53").innerHTML=Counter35*7;

document.getElementById("haae3").innerHTML=Counter36;
document.getElementById("haae63").innerHTML=Counter36*3;





document.getElementById("yaa3").innerHTML=Counter310;
document.getElementById("yaa103").innerHTML=Counter310*10;

document.getElementById("noon3").innerHTML=Counter311;
document.getElementById("noon113").innerHTML=Counter311*12;

document.getElementById("kaf3").innerHTML=Counter312;
document.getElementById("kaf123").innerHTML=Counter312*11;


document.getElementById("ouaou3").innerHTML=Counter313;
document.getElementById("ouaou133").innerHTML=Counter313*4;



document.getElementById("saad3").innerHTML=Counter316;
document.getElementById("saad163").innerHTML=Counter316*8;



document.getElementById("ppaf3").innerHTML=Counter318;
document.getElementById("ppaf183").innerHTML=Counter318*1;




document.getElementById("faa3").innerHTML=Counter322;
document.getElementById("faa223").innerHTML=Counter322*13;



document.getElementById("text3").addEventListener("keyup",countWord3);

allsenda =  Counter31*5 + Counter32*2 + Counter33*6 + Counter34*9 + Counter35*7 + Counter36*3 + Counter310*10 + Counter311*12 + Counter312*11 + Counter313*4  + Counter316*8 + Counter318*1 + Counter322*13    ;
document.getElementById("best33").innerHTML=  Counter31*5 + Counter32*2 + Counter33*6 + Counter34*9 + Counter35*7 + Counter36*3 + Counter310*10 + Counter311*12 + Counter312*11 + Counter313*4  + Counter316*8 + Counter318*1 + Counter322*13    ;
document.getElementById("best63").innerHTML= Counter31 + Counter32 + Counter33 + Counter34 + Counter35 + Counter36  + Counter310 + Counter311 + Counter312 + Counter313 + Counter316+ Counter318  + Counter322  ;
document.getElementById("xbest").innerHTML = allsenda ;      
 document.getElementById("allsense").innerHTML = harakatm +allsenda ;    

}



