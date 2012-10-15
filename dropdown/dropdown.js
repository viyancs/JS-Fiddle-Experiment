var result = $("#result");

$('#dropdown').keydown(function() {
    result.css('position','relative');
    result.css('left',$(this).css('left'));
    result.css('top',$(this).css('top')); 
    result.css('display','block'); 
    result.css('z-index',1000); 
    result.css('width',$(this).css('width')); 
    result.css('height',$(this).css('height'));    
});

$("#dropdown").blur(function(){
      result.fadeOut(1500);
});
))
