/**
 * 
 * VDropdown - plugin dropdown using jquery lib
 *
 * generate dropdown using json format
 * request to server & passing json format automatically 
 *
 * @author M Sofiyan
 * @email msofyancs@gmail.com
 * @skypeid viyancs
 * @url https://github.com/viyancs/JS-Fiddle-Experiment/tree/master/dropdown
 * 
 * if you want to using part of full this code, please don't remove this comment
 *
 */
(function( $ ){
    
    var vobj = {};
    var res = $("<div class='result-dropdown'></div>");
    var tmpl  = '';
    
    
    /**
     * initializing 
     */
    vobj.init = function(el) {
        
        //init css
        var css = [{
            'display':'none',
            'position':'absolute',
            'left':el.offset().left,
            'top':(el.offset().top + 20),
            'z-index':1000,
            'width':el.css('width'),
            'height':'200px',
            'overflow':'auto'
        }]; 
        
        res.css(css[0]);
        res.appendTo('body');
    }
    
    /**
     * property 
     */
    vobj.url = true;
    vobj.id = true;
 
    /**
     * passing from json format
     */
    vobj.fromJson = function(el){
        
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
                    dataTmpl = vobj.createTempl(valObj);
                });
                
                //clear html
                res.html('');
                res.html(dataTmpl);
                
                //clear templ
                tmpl = '';

                //trigering element by class name
                $('.row-parent').click(function(e) {
                    
                    var val = $(this).find('>:first-child');                    
                    el.val(val.text());
                    el.attr('data-value',$(this).attr('id'));
                    
                    //think again
                    //$("#lokasi").val($(this).attr('id'));
                    
                    e.stopPropagation();
                    
                });

                $('.row-child').click(function(e) {
                    
                    var val = $(this).find('>:first-child');                    
                    el.val(val.text());
                    el.attr('data-value',val.parent().attr('id'));
                    //$("#lokasi").val($(this).attr('id'));
                    
                    e.stopPropagation(); 
                    
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
     * generate template dropdown 
     */
    vobj.createTempl = function(valObj) {
        
        tmpl += '<div id="' + valObj.id +'" class="row-parent" >';
        tmpl += '<a href="#' + valObj.id +'"><img src="#" width="16px" height="16px">'+ valObj.name +'</a>';
        
        if(valObj.kota) {
            $.each(valObj.kota,function(i,value) {
                tmpl += '<div class="row-child" id="' + value.id + '">'; 
                tmpl += '<a href="#row-' + value.id + '"><img src="#" width="16px" height="16px">';
                tmpl += value.name;
                tmpl += '</a>';
                tmpl += '</div>';            
            });
            
        }
        tmpl += '</div>';
        
        return tmpl;
    }
         
    /**
     * hide dropdown
     */        
    vobj.hide = function(el) {
        res.slideUp(1500);
    }
     
    /**
     * show dropdown
     */        
    vobj.show = function(el) {
        res.slideDown(1500);
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

                } else {
             
                    //calling init function
                    vobj.init(el);

                    //setting property
                    eval('vobj.' + key + '= value');
             
                    //return fromJson
                    return vobj.fromJson(el);

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
    
    $("#getId").click(function(){
        
       var val = $("#dropdown").attr('data-value');
        
        if(typeof val === 'undefined') {
            
           alert('please select locations');
            
        }else {
        
           alert(val);                
        
        }
    });
    
});