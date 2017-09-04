function main(){
  mkGrid(16);
  $("#gridButton").on('click', function(){
    var gridVal = prompt("Size of the grid:", 16);
    $('.row').remove();
    mkGrid(gridVal);
  });
  $('#grid').on('mouseenter', '.field',function(){
    console.log('hover');
    $(this).removeClass('normal');
    $(this).addClass('highligth');
  });
}

function mkGrid(gridVal){
  var grid = $('#grid');
  var size = (400 / gridVal) -2;
  for(var i = 0; i < gridVal; i++){
    var list = $('<div class=\"row\"></div>');
    grid.append(list);
    for(var j = 0; j < gridVal; j++){
      var field = $('<div class=\"field\"></div>');
        field.addClass('normal');
      list.append(field);
    }
  }
  $('.field').css({'width': size +'px', 'height': size +'px'});
}

$( main );
