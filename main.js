// if(shart){
//     //... bajariladigan amallar 
// }
// else if(shart1){
//     // ... 
// }
// else if(shart2){
//     // ... 
// }
// else if(shart3){
//     // ... 
// }
// else if(shart1){
//     // ... 
// }
// else if(shart1){
//     // ... 
// }
// else if(shart1){
//     // ... 
// }
// else if(shart1){
//     // ... 
// }
// else{
//     //  bajariladigan amallar 
// }


// let a = Number(prompt('yoshingizni kiriting'));

// switch (a) {
//     case 21:
//         alert('Sizning yoshingiz 21 da');
//         break;
//     case 22:
//         alert('Sizning yoshingiz 22 da');
//         break;
//     case 23:
//         alert('Sizning yoshingiz 23 da');
//         break;    
//     case 24:
//         alert('Sizning yoshingiz 24 da');
//         break;
//     default:
//         alert('Bunday yosh dasturda mavjud emas');
// }

// // ternar operator
// if(a>25){
//     alert('25 dan katta')
// }else{
//     alert('25 dan kichik')
// }

// (a>25)? alert('25 dan katta'):alert('25 dan kichik');

// // (shart) ? true:false;

// (5>9)? alert('5 9 dan katta'):alert('5 9 dan katta emas');


let firstInput = document.getElementsByTagName('input')[0];
let secondInput = document.getElementsByTagName('input')[1];

function plyus(){
    firstInput.value = Number(firstInput.value) + 1;
}

function minus(){
    secondInput.value = Number(secondInput.value) + 1;
}

let javob1 = prompt('qaysi teg tekstni kursiv qilib beradi?');
(javob1=="i")? plyus():minus();

let javob2 = prompt('qaysi teg tekstni qalin qilib beradi?');
(javob2=="b" || javob2=="strong")? plyus():minus();

let javob3 = prompt('qaysi teg tekstni tagiga chizilgan qilib beradi?');
(javob3=="u")? plyus():minus();

let javob4 = prompt('qaysi teg yordamida video qoyiladi?');
(javob4=="video")? plyus():minus();

let javob5 = prompt('qaysi teg link qaysi css tengmi ?');
(javob5=="link")? plyus():minus();

    alert('siz 5 ta testdan ' + firstInput.value + " ta to'g'ri va " + secondInput.value + " ta xato ishladingiz");
