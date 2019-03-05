google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback (dibujoGrafica);
				function dibujoGrafica(){
					var datos =  new google.visualization.DataTable();// Objeto de la API de google
					datos.addColumn('string','Ciudades');
					datos.addColumn ('number', 'Visitas');
					datos.addRows ([
						['CDMX', 50],
						['Monterrey', 40],
						['Guadalajara', 35],
						['Sonora', 10],
						['Merida', 30]
						]);
					var opciones = {'title': 'Numero de visitar', // Arreglo Sociativo
									'width':800,
								 	'height':300};
					var graficas = new google.visualization.ColumnChart(document.getElementById('graficasGoogle'));					
					graficas.draw(datos,opciones);				 
					}