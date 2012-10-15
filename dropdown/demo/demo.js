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
    var tmpl  = '';
    
    
    /**
     * initializing 
     */
    vobj.init = function(el) {
        
        //init css
        var css = [{
        'display':'none',
        'position':'relative',
        'left':el.css('left'),
        'top':el.css('top'),
        'z-index':1000,
        'width':el.css('width'),
        'height':'200px',
        'overflow':'auto'
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
        
        //request to server
        $.ajax({
          url: this.url,
          async: true,
          cache: false,
          method: 'POST',
          dataType: 'html',//using html becasue i'm not set json header
          beforeSend: function() {
                console.log('Fired prior to the request');
          },
          success: function(data) {
    
                var dataJson = JSON.parse(data);
                var dataTmpl = '';
                console.log('Fired when the request is successfull');
                
                //parsing json data
                $.each(dataJson.rows, function(i, valObj) {
                    $.each(valObj,function(key,val) {
                        dataTmpl = vobj.createTempl(key,val);
                    });
                });
                
                //clear html
                res.html('');
                res.html(dataTmpl);
                
                //clear templ
                tmpl = '';
                    
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
     * generate template dropdown 
     */
     vobj.createTempl = function(key,val) {
         
        tmpl += '<div id="12" class="row-parent" >';
        tmpl += '<a href="#tid"><img src="#" width="16px" height="16px">'+ key +'</a>';
        $.each(val,function(i,value) {
             tmpl += '<div class="row-child">'; 
             tmpl += '<a href="#3"><img src="#" width="16px" height="16px">';
             tmpl += value;
             tmpl += '</a>';
             tmpl += '</div>';            
        });
        tmpl += '</div>';
        
        return tmpl;
     }
         
    /**
     * hide dropdown
     */        
     vobj.hide = function(el) {
        res.fadeOut(1500);
     }
     
    /**
     * show dropdown
     */        
     vobj.show = function(el) {
        res.fadeIn(1500);
     }

  $.fn.vdropdown = function(method) {
     
     var el = this;

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
             
             //calling init function
             vobj.init(el);

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
    
    //generate dropdown list   
    $('#dropdown').vdropdown({
           url:'/gh/get/response.json/viyancs/JS-Fiddle-Experiment/tree/master/dropdown/demo/' 
       //see http://doc.jsfiddle.net/use/github_response.html for details
        
        });
    $('#dropdown').focus(function() {      
       $(this).vdropdown('show');                    
    });
    
    $("#dropdown").blur(function(){
        $(this).vdropdown('hide');
    });
});