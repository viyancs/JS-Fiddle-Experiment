/**
 * vquicksort is function for sorting data with quicksort metode
 * this function dependencies on this article http://en.wikipedia.org/wiki/Quicksort
 * check array if just one value return that , because one number can not sort
 * select a pivot from array value and remove that , becasue we don't compare pivot with pivot
 * create empty array for less number than pivot and create array for higher number that pivot
 * check if number comparison <= pivot place to less array, if not, place to higher array, this is will be any 2 array less and higher , and one pivot
 * recursive function on array less,and higher array.
 * merge array less after recursive, array pivot , and array higher after recursive, pivot must be set as array
 * 
 * @author M Sofiyan
 * @email msofyancs@gmail.com
 * @skypeid viyancs
 * @url https://github.com/viyancs/JS-Fiddle-Experiment/tree/master/sort/quick-sort
 * @reference
     article : 
        http://en.wikipedia.org/wiki/Quicksort
        http://www.squidoo.com/sorting-algorithms
    video : 
        http://www.youtube.com/watch?v=ywWBy6J5gz8&feature=relmfu (it's so funny video i think, but with that, people can be easily to understand quicksort.)
        http://www.youtube.com/watch?v=KMZ_N1PsF4U ( this video will be compare quicksort vs buble sort)
 *
 * @important
 * if you want to using part of full this code, please don't remove this comment
 */ 

(function($){
    //declare obj variable
    var vobj = {}; 
    
    vobj.vsort = function(obj) {
          
         /**
          * handling statement to execute vobj function  from parameter method
          */       
          if(typeof obj=== 'object') {
            
            //check if obj just one value
            if(!obj.length) return obj;
            
            //select a pivot value from array and unset that 
            var pivot = obj[0];obj.splice(0,1);
    
            //create less array
            var less = [];
    
            //create higher array
            var higher = [];
    
            $.each(obj,function(key,val){
               
                if(val <= pivot) {
                   less.push(val);
                }
                else {
                   higher.push(val);
                }
                
            });
    
            return this.vsort(less).concat([pivot],this.vsort(higher));
                         
          }
        
          /**         
           * if method not exist
           */
          else {
               $.error( 'vobj ' +  obj+ ' does not exist on jQuery.vdropdown' );
               return false;
          }
    }
    
    /**
     * extend to active not just element to calling this function
     * ex $.vsort(arraydata)
     */
    $.extend(vobj);
   
})​(jQuery)
        
$(function(){ 
    var data =  [4,3,6,8,5,12,14,10,4,8,3,19];
    var sortData = $.vsort(data);

     $('body').append('<p> data after sort = ' + sortData + '</p>');
});
​