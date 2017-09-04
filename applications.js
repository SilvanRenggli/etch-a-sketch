function main(){
  mkGrid(16);
  var mousedown = false;
  color = 'rgb(256, 0, 0)';
  $("#gridButton").on('click', function(){
    do{
    var gridVal = prompt("Size of the grid (between 1 and 42):", 16);
  }while(gridVal < 1 || gridVal >42)
    $('.row').remove();
    mkGrid(gridVal);
  });
  $("#clearButton").on('click', function(){
    $('.field').css('background-color', 'black');
  });
  $("#randomButton").on('click', function(){
    var red = Math.floor(Math.random() * 257);
    var green = Math.floor(Math.random() * 257);
    var blue = Math.floor(Math.random() * 257);
    color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    $('#randomButton').css('background-color', color);
  });
  $('#grid').on('mouseenter', '.field',function(){
    if(mousedown){
    $(this).css('background-color', color);
    }
  });
  $('body').on('mousedown', function(){mousedown = true});
  $('body').on('mouseup', function(){mousedown = false});
}

function mkGrid(gridVal){
  var grid = $('#grid');
  var size = (400 / gridVal) -2;
  for(var i = 0; i < gridVal; i++){
    var list = $('<div class=\"row\"></div>');
    grid.append(list);
    for(var j = 0; j < gridVal; j++){
      var field = $('<div class=\"field\"></div>');
      list.append(field);
    }
  }
  $('.field').css({'width': size +'px', 'height': size +'px'});
}

$( main );
