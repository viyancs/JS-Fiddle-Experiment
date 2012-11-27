Summary
-----------
when we are buying something in market we ever get return money for price of goods our choice,this case we want to create program for
creating money return with indonesia format currency.

<br/>
<b>Important to understand before creating program </b>
<ol>
<li> Return money will be considered optimal result </li>
<li> Maximum Optimal Problem</li>
<li> Minimum Optimal Problem</li>
</ol>

<b>List Indonesian Currency </b>
<ol>
<li>Rp 50,00 (lima puluh rupiah)</li>
<li>Rp 200,00 (dua ratus rupiah)</li>
<li>Rp 500,00 (lima ratus rupiah)</li>
<li>Rp 1000,00 (seribu rupiah)(</li>
<li>Rp 2000,00 (dua ribu rupiah</li>
<li>Rp 5000,00 (lima ribu rupiah)</li>
<li>Rp 10.000,00 (sepuluh ribu rupiah)</li>
<li>Rp 20.000,00 (dua puluh ribu rupiah)</li>
<li>Rp 50.000,00 (lima puluh ribu rupiah)</li>
<li>Rp 100.000,00 (seratus ribu rupiah)</li>
</ol>

<b>Example Maximum Optimal Result</b><br>
Price of goods is Rp 2000,00 , we have money for pay is Rp 10.000,00  return is Rp 8000,00 with description like this
<ul>
<li>Rp 5000,00 1 pieces</li>
<li>Rp 2000,00 1 pieces</li>
<li>Rp 1000,00 1 pieces</li>
</ul>

<b>Example Minimum Result </b> <br/>
Price of goods is Rp 2000,00 , we have money for pay is Rp 10.000,00  return is Rp 8000,00 with description like this
<ul>
<li>Rp 50,00 160 pieces</li>
</ul>

Theoretical
------------
from the above explanation we can found the main problem is about Optimization (finding optimal result), for solve this problem we can use
<b>Greedy Algorithm</b>.

<b>About Greedy Algorithm</b>
<blockquote>A greedy algorithm is an algorithm that follows the problem solving heuristic of making the locally optimal choice at each stage[1] with the hope of finding a global optimum. <em><b>http://en.wikipedia.org/wiki/Greedy_algorithm</b></em></blockquote>
Greedy Algorithm in my opinion is algorithm to finding and solving about optimization problem using all the possibilities that could be happen.

<b>Characteristic Greedy Algorithm </b>
<ol>
<li>Principle Greedy Algorithm <blockquote>take what you can get now!</blockquote></li>
<li>try all possibility, of course greedy</li>
<li>step by step</li>
<li>in each step many options to be explore</li>
</ol>

<b>Cases of failure</b>

as I said before , we have money Rp 10.000,00 for pay Rp 2000,00 and we get the return money Rp 8000,00 , case failure is return money Rp 50,00 (160 pieces)
that is terrible if use on real life.

Problem Solving
----------------
for solve that problem, we must matching money, with choosing a big number of money is approaching.

<b>Algorithm</b>

<ul>
<li> creating array list of currency indonesian format</li>
<li> checking if pay and price is same return pay/price (divisible).</li>
<li> make sure price low than pay </li>
<li> reverse array for maximum optimal result </li>
<li> matching by divide array with return money  to get a big number is approacing with return money </li>
<li> make result divide as count of a big number of return money </li>
<li> make array return_money with key is big number and value is counter of big number </li>
<li> return array return_money </li>
</ul>


Reference
-----------
<ul>
<li><a href="http://en.wikipedia.org/wiki/Greedy_algorithm"> Greedy Algorithm </a></li>
<li><a href="http://www.ittelkom.ac.id/staf/zka/Materi%20Desain%20Analisis%20Algoritma/M09Algoritma%20Greedy.pdf"> PDF Indonesia Language about Greedy Algorithm </a>
</li>
</ul>

Demo
-----------
http://jsfiddle.net/gh/get/jquery/1.8.2/viyancs/JS-Fiddle-Experiment/tree/master/money-return/indonesia/demo/
