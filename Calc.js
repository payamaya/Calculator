
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var res =  document.getElementById("result");





$(function () {   
$('.btn').on('click',function(){
  if(num1.value=='' || num2.value=='' ){
    $('.display').val('');
    $('h1').html('&#128078' + 'Error!Numbers In Both Display');
    }

});

  $('.display').click(function(){
    $(this).css('color','#099fd5','font-family:cursive');
  
  });


  });
$('#add').click(function(){
    res.value = 
    parseInt(num1.value) + parseInt(num2.value); 
    $('.display').css('background','yellow');
    $('.screen').css('background','yellow');
    $(this).css('background','yellow');
    $('h4').css('color','yellow');
  

});

$('#sub').click(function(){
    res.value = 
    parseInt(num1.value) - parseInt(num2.value);
    $('.display').css('background','green');
    $('.screen').css('background','green');
    $(this).css('background','green');
    $('h4').css('color','green').fadeIn('slow');
   
});
$('#mult').mouseenter(function(){
    res.value = 
    parseInt(num1.value) * parseInt(num2.value);
    $('.display').css('background','red');
    $('.screen').css('background','red');
    $(this).css('background','red');
    $('h4').css('color','red').fadeIn(10);
 

});
$('#div').mouseleave(function(){
    res.value =
    parseInt(num1.value) / parseInt(num2.value);
    $('.display').css('background','blue');
    $('.screen').css('background','blue');
    $(this).css('background','blue');
    $('h4').css('color','blue');
 
});

$('#module').mouseover(function(){
  res.value =
  parseInt(num1.value) % parseInt(num2.value);
   $('.display').css('background','purple');
   $('.screen').css('background','purple');
   $(this).css('background','purple');
   $('h4').css('color','purple');
      
    });
   
$('#back').on('click',function(){

$('.display').css('background','blue');
alert('This button will empty your input');
$(this).css('background','blue');
$('.screen').css('background','blue');
$(':input.display').val('');


});

  $('#clear').click(function(){
    $(":input").val('');
    $('.screen').css('background','white');
    $(':input').css('background','white');
});

$('.display').keypress(function(){
  $('#head').animate({
    opacity: 0.2,
    paddingbottom: '+50'}, 3000, function(){
      $(this).append();
    });
    $('#head').html('Welcome' + '&#128079').css('color','yellow');
 
});

$('.screen').click(function(){
  $(':input').css('background','darkgrey');
  $('.screen').css('background','white');
  $(this).css('borderWidth','5px')
  alert('Here you can only see the result.\nPlease enter numbers in the display above!');
});
$('#refresh').on('click',function(){
  window.location.reload(true);
  

})



let numberOfButton = $(".btn").length;

for(i =0; i< numberOfButton; i++){
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

