(function( $ ){
    
    var vobj = {};
    var res = $("<div id='result' class='result'></div>");
    
    /**
     * initializing 
     */
    vobj.init = function(el) {
        
        res.css('display','block');
        res.css('position','relative');
        res.css('left',el.css('left'));
        res.css('top',el.css('top'));  
        res.css('z-index',1000); 
        res.css('width',el.css('width')); 
        res.css('height',el.css('height'));  
        
        res.appendTo('body');
    }
    
    /**
     * hide dropdown
     */        
     vobj.hide = function(el) {
        res.fadeOut(1500);
     }

  $.fn.vdropdown = function(method) {
     
    /**
     * handling statement to execute vobj function  from parameter method
     */       
     if(vobj[method]) {
         return eval('vobj.' + method + '(this)');   
     }
 
    /**
     * if method type is object or null return to init function
     */
     else if(typeof method === 'object' || !method) {
         return vobj.init(this);
     }

    /**         
     * if method not exist
     */
     else {
         $.error( 'vobj ' +  method + ' does not exist on jQuery.vdropdown' );
     }
  };

})( jQuery );

$(function(){
$('#dropdown').keydown(function() {
    $(this).vdropdown();  
});

$("#dropdown").blur(function(){
    $(this).vdropdown('hide');
});
});
