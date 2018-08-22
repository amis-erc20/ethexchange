var website = 'http://amis-erc20.github.io/ethexchange/index.html';
// var website = 'http://localhost:8080/www/crypto-exchange/index.html';
//var website = 'http://53274912.swh.strato-hosting.eu/nexdex/index.html';
var url = window.location.href;
var hash = url.substring(url.indexOf("#")+1);

$(document).ready(function() {

	if(hash.length < 10)
	{
		loadPage(hash);
	}
	else
	{
		loadPage('home');
	}

});

function loadPage(page) 
{
	if(page)
	{
		href = '#' + page;
		$('.content-element').css('display','none');
		$(href).css('display', 'block');
		$('.menu-container').addClass('hidden');
		menu_active = 0;

		if(href == '#exchange')
		{
			drawChartNow();
		}
	}
}

$('a').click(function(e) {

	if(!$(this).attr('data-href'))
	{
		e.preventDefault();
	}
	else
	{
		loadPage($(this).attr('data-href'));
	}

});

$('.password-toggle').click(function() {

	if($(this).parent().next().attr('type') == 'password')
	{
		$(this).parent().next().attr('type', 'text');
		$(this).children().html('&#xe106;');
	}
	else
	{
		$(this).parent().next().attr('type', 'password');
		$(this).children().html('&#xe105;');
	}

});

$('.private-key').children('a').click(function() {

	if($(this).next().attr('data-visibility') == '0')
	{
		$(this).next().attr('data-visibility', '1');
		$(this).next().removeClass('hidden');
		$(this).html('Hide Private Key&nbsp;&nbsp;<span class="glyphicon">&#xe106;</span>');
	}
	else
	{
		$(this).next().attr('data-visibility', '0');
		$(this).next().addClass('hidden');
		$(this).html('Show Private Key&nbsp;&nbsp;<span class="glyphicon">&#xe105;</span>');
	}

});

var menu_active = 0;

$('.menu-icon').click(function() {

	if(menu_active == 0)
	{
		$('.menu-container').removeClass('hidden');
		menu_active = 1;
	}
	else
	{
		$('.menu-container').addClass('hidden');
		menu_active = 0;
	}

});

$('.toggle-heading').click(function() {

	if($(this).next().attr('data-visibility') == '0')
	{
		$(this).next().attr('data-visibility', '1');
		$(this).next().removeClass('hidden');
		$(this).children('.arrow-close').removeClass('hidden');
		$(this).children('.arrow-open').addClass('hidden');
	}
	else
	{
		$(this).next().attr('data-visibility', '0');
		$(this).next().addClass('hidden');
		$(this).children('.arrow-close').addClass('hidden');
		$(this).children('.arrow-open').removeClass('hidden');
	}

});

function drawChartNow() {

	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'AMIS (in USD)'],
	  ['January 2017',  0.001],
	  ['February 2017',  0.01],
	  ['March 2017',  0.01],
	  ['April 2017',  0.1],
	  ['May 2017',  1.01],
	  ['Jun 2017',  10.01],
	  ['July 2017',  100.01],
	  ['August 2017',  1000.01],
	  ['September 2017',  10000.01],
	  ['October 2017',  1000.01],
	  ['November 2017',  1174.93],
	  ['December 2017',  1174.93],
	  ['January 2018',  1174.93],
          ['January 2018',  1174.93],
          ['February 2018',  4.93],
          ['March 2018',  14.93],
          ['April 2018',  1174.93],
          ['May 2018',  1174.93],
          ['June 2018',  1174.93],
          ['July 2018',  1174.93],
	  ['August 2018',  1174.93]
        ]);

        var options = {
          title: 'AMIS Coin Performance in USD ($) all time to Date',
          legend: { position: 'top' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


}
