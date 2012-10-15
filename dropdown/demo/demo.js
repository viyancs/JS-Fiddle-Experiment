/**
 * VDropdown - plugin dropdown using jquery lib
 *
 * generate dropdown using json format
 * request to server & passing json format automatically 
 *
 * @author M Sofiyan
 * @email msofyancs@gmail.com
 * @skypeid viyancs
 * if you want to using part of full this code, please don't remove this comment
 *
 */
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
     * property url
     */
     vobj.url = true;
 
    /**
     * passing from json format
     */
     vobj.fromJson = function(){
        
        
        $.ajax({
          url: vobj.url,
          async: true,
          cache: false,
          method: 'POST',
          dataType: 'html',//using html becasue i'm not set json header
          beforeSend: function() {
                console.log('Fired prior to the request');
          },
          success: function(data) {
                var dataJson = JSON.parse(data);
                var i = 0;
                console.log('Fired when the request is successfull');
                $.each(dataJson, function(key, value) {
                     alert(key);
                     alert(value[i]);
                     i++;
                });
          },
          complete: function() {
                console.log('Fired when the request is complete');
          },
          error:function(){
            alert('error');
           }
        });
        
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
     * if method type is null return to init function
     */
     else if(!method) {
         return vobj.init(this);
     }
         
    /**
     * if method is object , will be passing data from json
     */
     else if(typeof method === 'object') {
         
        $.each(method, function(key, value) {    
          
         //cheking property of object must be defined         
          if(!vobj[key]) {
         
             $.error( 'vobj ' +  key + ' does not exist on jQuery.vdropdown' );

             return false;

          }else {
             
             //setting property
             eval('vobj.' + key + '= value');
             
             //return fromJson
             return vobj.fromJson();

          }         
        
        });

        
     }

    /**         
     * if method not exist
     */
     else {
         $.error( 'vobj ' +  method + ' does not exist on jQuery.vdropdown' );
         return false;
     }
  };

})( jQuery );

$(function(){
$('#dropdown').keydown(function() {
    
    $(this).vdropdown({
       url:'/gh/get/response.json/viyancs/JS-Fiddle-Experiment/tree/master/dropdown/demo/' 
   //see http://doc.jsfiddle.net/use/github_response.html for details
    
    });  
    
});

$("#dropdown").blur(function(){
    $(this).vdropdown('hide');
});
});