var plantilla= "<div>" +
"<p><strong>nombre:</strong>__nombre</p>"+
"<p><strong>Apellido:</strong>__apellido</p>"+
"<p><strong>Edad:</strong>__edad</p>"+
"<p><strong>Deporte:</strong>__deporte</p>"+
"</div>"

$(document).ready(function(){
	$.ajax({
		url:"http://localhost:3040/demo.json",
		type: "GET",
		success:function(response){
			$("#datos").html(plantilla
				.replace("__nombre",response.nombre)
				.replace("__apellido",response.apellido)
				.replace("__edad",response.edad)
				.replace("__deporte",response.deporte));
			
			$("#datos2").html(plantilla
				.replace("__nombre",response.nombre2)
				.replace("__apellido",response.apellido2)
				.replace("__edad",response.edad2)
				.replace("__deporte",response.deporte2));
	
			$("#datos3").html(plantilla
				.replace("__nombre",response.nombre3)
				.replace("__apellido",response.apellido3)
				.replace("__edad",response.edad3)
				.replace("__deporte",response.deporte3));

			$("#datos4").html(plantilla
				.replace("__nombre",response.nombre4)
				.replace("__apellido",response.apellido4)
				.replace("__edad",response.edad4)
				.replace("__deporte",response.deporte4)

			$("#datos5").html(plantilla
				.replace("__nombre",response.nombre4)
				.replace("__apellido",response.apellido4)
				.replace("__edad",response.edad4)
				.replace("__deporte",response.deporte4));
		},
		error: function(error) {
			console.log(error);
		}
	});
});