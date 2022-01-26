
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var res =  document.getElementById("result");


$(document).ready(function () {   
$('#add').click(function(){
    res.value = 
    parseInt(num1.value) + parseInt(num2.value);
    $('.screen').css('background','yellow');
    $(this).css('background','yellow');
  /*   $('#add').dblclick(function(){
      $("#empty :input").val('');
    }) */
});

$('#sub').click(function(){
    res.value = 
    parseInt(num1.value) - parseInt(num2.value);
$('.screen').css('background','green');
$(this).css('background','green');
 /*    $('#sub').dblclick(function(){
      $("#empty :input").val('');
    }) */
   
});
$('#mult').mouseenter(function(){
    res.value = 
    parseInt(num1.value) * parseInt(num2.value);
    $('.screen').css('background','red');
    $(this).css('background','red');
  /*   $('#mult').dblclick(function(){
      $("#empty :input").val('');
    }) */

});
$('#div').mouseleave(function(){
    res.value =
    parseInt(num1.value) / parseInt(num2.value);
    $('.screen').css('background','blue');
    $(this).css('background','blue');
  /*   $('#div').dblclick(function(){
      $("#empty :input").val('');
    }) */
});
$('#module').mouseover(function(){
    res.value =
    parseInt(num1.value) % parseInt(num2.value);
    $('.screen').css('background','purple');
    $(this).css('background','purple');
   /*  $('.diplsy').innerHTML=number;
    $('.btn').appendTo('.screen'); */
    /* $('#module').dblclick(function(){
      $("#empty :input").val('');
    }) */
});
$('#back').on('click',function(){

alert('This button will empty your input');
$(this).css('background','blue');
$('.screen').css('background','silver');
    $(".display").val('');  


});
  $('#clear').click(function(){
    $(":input").val('');
    $('.screen').css('background','white');
    $(':input').css('background','white');
    
    
});
$('.display').keypress(function(){
  $('.btn').css('background','darkgrey');
});
$('.screen').click(function(){
  $(':input').css('background','darkgrey');
  $('.screen').css('background','white');
  alert('Must right a number first');
});
});


let numberOfDrumButton = $(".btn").length;

for(i =0; i< numberOfDrumButton; i++){
$(".btn")[i].addEventListener("click", function checkClick(){
   let buttonInnerHTML=this.innerHTML;
   makeSound(buttonInnerHTML); 
   buttonAnimation(buttonInnerHTML);

$("keydown").presskey( function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});
});
}
function makeSound(key) {
  switch (key){
      
case "+": let tom1 = new Audio("sounds/shotgun-firing-4-6746.mp3");
tom1.play();
break;
case "-": let tom2 = new Audio("sounds/big-impact-7054.mp3");
tom2.play();
break;
case "x": let tom3 = new Audio("sounds/success-1-6297.mp3");
tom3.play();
break;
case "/": let tom4 = new Audio("sounds/future-logo2-13177.mp3");
tom4.play();
break;
case "%": let tom5 = new Audio("sounds/happy-logo-version-2-13399.mp3");
tom5.play();
break;
case "c": let tom6 = new Audio("sounds/positive-logo-opener-13622.mp3");
tom6.play();
break;
case "back": let tom7 = new Audio("sounds/boat-horn-6204.mp3");
tom7.play();
break;
default : 
console.log (buttonInnerHTML);
break;
  }
}

/* const texts = document.querySelector('.texts');
window.speechRecognition= window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new window.speechRecognition();
recognition.interimResults=true;

let p = document.createElement('p');
recognition.addEventListener('result',(e) =>{

  const text = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');
  p.innerText=text;
  texts.appendChild(p);

  if(e.result[0].isFinal){
    if(text.includes('Hello')){
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText='hi';
      texts.appendChild(p);
    }
    if(text.includes('How old are you')){
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText='Iam 42 years old';
      texts.appendChild(p);
    }
    p = document.createElement('p');
  }
  console.log(e);
})
recognition.addEventListener('end', ()=>{
recognition.start();
})
 
recognition.start(); */
