Quick Sort Technic 
-------------------
Quick Sort is a divide and conquer algorithm , Quicksort first divides a large list into two smaller sub-lists: the low elements and the high elements,Quicksort can then recursively sort the sub-list.
<br/>
<img src="http://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif"/>

Algorithm
---------
<ol>
   <li> Pick an element called a <i>Pivot</i> from array </li>
   <li> Reorder of array so that elements with less values than pivot place to left pivot, and elements with higher values than pivot place right after pivot </li>
   <li> Recursively less array and higher array
   <li> return as merge less values, pivot , and higher values to one array </li>
</ol>

Usage
-----
<pre>
 var data =  [4,3,6,8,5,12,14,10,4,8,3,19];
 var sortData = $.vsort(data);
 console.log(sortData);

 //result data after sorting
 [3, 3, 4, 4, 5, 6, 8, 8, 10, 12, 14, 19] 
</pre>

Tested
------
<ol>
<li> result numbers on array is good</li> 
<li> result with number,character . number will be place on first before character </li>
<li> result character on array is good </li>
<li> other , i hope any someone can tested with more complex data, and if have bugs please create issue and i will try to fix that </li>
</ol>

Demo
-----
Quicksort [Demo page] (http://jsfiddle.net/gh/get/jquery/1.8.2/viyancs/JS-Fiddle-Experiment/tree/master/sorting/quick-sort/demo/)

Reference
---------
about [Quick-Sort](en.wikipedia.org/wiki/Quicksort) <br/>
about [Sort on Programming] (http://www.squidoo.com/sorting-algorithms)<br/>
video [Quick-Sort-video](www.youtube.com/watch?v=ywWBy6J5gz8&feature=relmfu)<br/>
video [Quick-Sort vs Buble Sort](http://youtube.com/watch?v=KMZ_N1PsF4U)<br/>

