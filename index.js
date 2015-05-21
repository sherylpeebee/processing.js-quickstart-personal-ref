'function use strict()';

$(document).ready(function(){

  window.onload = draw;

  function draw(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  }

var words=['fishmonger', 'blasphemy', 'childish', 'aesop'];
var randomWord = words.length;

  $('#startGame').on('click', function(){


    var i = Math.floor(Math.random()*randomWord);

    var splitWord = words[i].split('');

      splitWord.forEach(function(letter){
        $('#alphabet').before("<div class='randomWordLetter'>" + letter + "</div>");
        //.before similarly to append, prepend, etc. adds element to the document
        //DIFF is that it gets placed BEFORE the selector.
      });
    var counter=0;
    do{
      $('#alphabet').append("<div class='alphabet'>abc</div>");
      $('.alphabet').wrap("<div class='alphabetWrapper'></div>");
      counter++;
    }while(counter<26);

    $('#startGame').hide();
    $('.randomWordLetter').hide();
    $('.randomWordLetter').wrap("<div class='letterContainer'></div>");

  });


});
