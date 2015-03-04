'use strict';

$(document).ready(function(){
  $('#text_input').on('submit', function(description){
    $('#stuff').append('<li>' + description + '</li>');
  })
})
