var client = new Keen({
	projectId: '55b20fa046f9a7208b7be99b',
	readKey: '457ee1e5bf966b691d88e227928969b9f9a25470a90210645a87f5d4b647b4346f6f6246e100885bb079f47de2dbb571687a9e1a3155b8e86e46a0f299b416f87657ccf258bacab04080bf89abf53fc284e0309ad868f8a473c82b156b46fd12d1b6ddaa2bc843410d2b781621c54e43'
});

Keen.ready(function() {

	//1
	
	var query1 = new Keen.Query('average', {
		eventCollection: 'demo',
		targetProperty: 'temperature',
		timeframe: "this_1_minutes"

	});

	var chart1 = client.draw(query1, document.getElementById('chart1'), {
		title: 'Current Temperture',
		chartType: 'metric',
		height: 100
	})

/*	var chart1 = new Keen.Dataviz()
	.el(document.getElementById('chart1'))
	.chartType('metric')
	.prepare();

	var req1 = client.run(query1, function (err, res) {
		if (err) chart1.error(err.message);
		else {
			chart1
				.parseRequest(this)
				.title("Temperature")
				.render();
			console.log('done');
		}
	});*/

	// 2

	var query2 = new Keen.Query('select_unique', {
		eventCollection: 'demo',
		targetProperty: 'temperature',
		groupBy: 'keen.timestamp',
		timeframe: "this_1_days",
		interval: 'daily'
	});

	var chart2 = client.draw(query2, document.getElementById('chart2'), {
		title: 'Temperature',
		chartType: 'linechart',
		height: 100
	});

	/*var chart2 = new Keen.Dataviz()
	.el(document.getElementById('chart2'))
	.chartType('linechart')
	.prepare();

	var req2 = client.run(query2, function (err, res) {
		if (err) chart2.error(err.message);
		else {
			chart2
				.parseRequest(this)
				.title("Temperature")
				.render();
			console.log('done');
		}
	});*/

})
