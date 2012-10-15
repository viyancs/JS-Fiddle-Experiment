(function( $ ){
    
    var vobj = {};
    var res = $("<div class='result'></div>");
    
    
    /**
     * initializing 
     */
    vobj.init = function(el) {
        
        //init css
        var css = [{
        'display':'block',
        'position':'relative',
        'left':el.css('left'),
        'top':el.css('top'),
        'z-index':1000,
        'width':el.css('width'),
        'height':el.css('height')
        }]; 
        
        res.css(css[0]);
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


$('#dropdown').keydown(function() {
    $(this).vdropdown();  
});

$("#dropdown").blur(function(){
    $(this).vdropdown('hide');
});
