
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var res =  document.getElementById("result");





$(function () {   
/* var inputVal= $('input').val();
alert($.isNumeric(inputVal)); */
$('.btn').on('click',function(){
  if(num1.value=='' || num2.value==''){
    alert('error must have only numbers in both displays');
  }
 if(':input.display'=== 'text'){
  alert('is not a number');
  }
  else{
    return ;
  }
})

  $('.display').click(function(){
    $(this).css('color','#099fd5','font-family:cursive');
  
  });


  })
$('#add').click(function(){
    res.value = 
    parseInt(num1.value) + parseInt(num2.value); 
    $('.display').css('background','yellow');
    $('.screen').css('background','yellow');
    $(this).css('background','yellow');
  
});

$('#sub').click(function(){
    res.value = 
    parseInt(num1.value) - parseInt(num2.value);
    $('.display').css('background','green');
    $('.screen').css('background','green');
    $(this).css('background','green');
   
});
$('#mult').mouseenter(function(){
    res.value = 
    parseInt(num1.value) * parseInt(num2.value);
    $('.display').css('background','red');
    $('.screen').css('background','red');
    $(this).css('background','red');
 

});
$('#div').mouseleave(function(){
    res.value =
    parseInt(num1.value) / parseInt(num2.value);
    $('.display').css('background','blue');
    $('.screen').css('background','blue');
    $(this).css('background','blue');
 
});

$('#module').mouseover(function(){

  res.value =
  parseInt(num1.value) % parseInt(num2.value);
   $('.display').css('background','purple');
   $('.screen').css('background','purple');
   $(this).css('background','purple');
  /*  if($('#container.display').value("")){
    alert('error');
   } */
    
      
    })
   
   

$('#back').on('click',function(){

$('.display').css('background','blue');
alert('This button will empty your input');
$(this).css('background','blue');
$('.screen').css('background','blue');
$(':input.display').val('');
$('.display').val=x.substr(0,x.length-1);

  


});


  $('#clear').click(function(){
    $(":input").val('');
    $('.screen').css('background','white');
    $(':input').css('background','white');

  
    
});
$('#refresh').on('click',function(){
  window.location.reload(true);

})
$('.display').keypress(function(){
  $('#head').animate({
    opacity: 0.1,
    paddingbottom: '+50'}, 3000, function(){
      $(this).append();
    });
 
});

$('.screen').click(function(){
  $(':input').css('background','darkgrey');
  $('.screen').css('background','white');
  $(this).css('borderWidth','5px')
  alert('Here you can only see the result.\nPlease enter numbers in the display above!');
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
