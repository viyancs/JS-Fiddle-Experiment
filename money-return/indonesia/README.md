Summary
-----------
when we are buying something in market we ever get return money for price of goods our choice,this case we want to create program for
creating return money with indonesia format currency.

<strong>Important to understand before creating program </strong>
<ol>
  <li>Return money will be considered optimal result</li>
	<li>Maximum Optimal Problem</li>
	<li>Minimum Optimal Problem</li>
</ol>
<strong>List Indonesian Currency </strong>
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
<strong>Example Maximum Optimal Result</strong>

Price of goods is Rp 2000,00 , we have money for pay is Rp 10.000,00 return money is Rp 8000,00 with description like this
<ul>
	<li>Rp 5000,00 1 pieces</li>
	<li>Rp 2000,00 1 pieces</li>
	<li>Rp 1000,00 1 pieces</li>
</ul>
<strong>Example Minimum Result </strong>

Price of goods is Rp 2000,00 , we have money for pay is Rp 10.000,00 return money is Rp 8000,00 with description like this
<ul>
	<li>Rp 50,00 160 coins</li>
</ul>
Theoretical
------------
from the above explanation we can found the main problem is about Optimization (finding optimal result), for solve this problem we can use
<strong>Greedy Algorithm</strong>.

<strong>About Greedy Algorithm</strong>
<blockquote>A greedy algorithm is an algorithm that follows the problem solving heuristic of making the locally optimal choice at each stage[1] with the hope of finding a global optimum. <em><strong>http://en.wikipedia.org/wiki/Greedy_algorithm</strong></em></blockquote>
<img src="http://upload.wikimedia.org/wikipedia/commons/8/8c/Greedy-search-path-example.gif" alt="" />

Greedy Algorithm in my opinion is algorithm to finding and solving about optimization problem using all the possibilities that could be happen.

<strong>Characteristic Greedy Algorithm </strong>
<ol>
	<li>Principle Greedy Algorithm
<blockquote>take what you can get now!</blockquote>
</li>
	<li>try all possibility, of course greedy</li>
	<li>step by step</li>
	<li>in each step many options to be explore</li>
</ol>
<strong>Cases of failure</strong>

as I said before , we have money Rp 10.000,00 for pay Rp 2000,00 and we get the return money Rp 8000,00 , case failure is return money Rp 50,00 (160 coins)
that is terrible if use on real life.

Problem Solving
----------------
for solve that problem, we must matching money, with choosing a big number of money is approaching.

<strong>Algorithm</strong>
<ul>
	<li>creating array list of currency indonesian format</li>
	<li>checking if pay and price is same return money is pay/price (divisible).</li>
	<li>make sure price low than pay</li>
	<li>reverse array for maximum optimal result</li>
	<li>matching by divide array with return money to get a big number is approacing with return money</li>
	<li>make result divide as count of a big number of return money</li>
	<li>make array return money with key is big number and value is counter of big number</li>
	<li>return array return money</li>
</ul>
Reference
-----------
<ul>
	<li><a href="http://en.wikipedia.org/wiki/Greedy_algorithm"> Greedy Algorithm </a></li>
	<li><a href="http://www.ittelkom.ac.id/staf/zka/Materi%20Desain%20Analisis%20Algoritma/M09Algoritma%20Greedy.pdf"> PDF Indonesia Language about Greedy Algorithm </a></li>
</ul>

Ask Question ?
--------------
http://indoallcode.com/programmatically-return-money

Demo
-----------
<a href="http://jsfiddle.net/gh/get/jquery/1.8.2/viyancs/JS-Fiddle-Experiment/tree/master/money-return/indonesia/demo/"> Demo Return Money </a>