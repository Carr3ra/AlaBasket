function euskadi(){
    $("#araba").hide();
    $("#euskadi").show();
    $("#exitBtn").buttonMarkup({theme: 'd'});
}

function araba(){
    $("#euskadi").hide();
    $("#araba").show();
    $("#exitBtn").buttonMarkup({theme: 'b'});
}

$(document).on("pageshow", "#clasificacion-eus", function(event) {
	clasificacionEus();
});

function clasificacionEus() {

				$.mobile.loading('show', {
					theme : "d",
					text : "Cargando datos...",
					textonly : false,
					textVisible : true
				});
				$("#notifClasi-eus").empty();
				$("#tablaClasi-eus tbody").empty();
				datos['tipo']="Resultados";
				datos['fed']="eus";
				$.ajax({
					type : "GET",
					url : "http://lab.url.ph/scrap.php",
					data : datos,
					success : function(data) {
						$("#tablaClasi-eus tbody").empty();
						var elements = $(data);
						//var titulo = elements[0].innerHTML;
						//$("#tituloClasi-eus").text(titulo);
						$("#categoria-eus").text(liga);
						var rows = elements.find("tr");
						for (var i = 1; i < rows.length; i++) {

							$("#tablaClasi-eus tbody").append(rows[i]);
						}
						$("table.responsive").each(function(i, element) {
							unsplitTable($(element));
						});
						$("table.responsive").each(function(i, element) {
							splitTable($(element));
						});
					},
					error : function(error) {
						$("#notifClasi").html(checkConnection());
					},
					complete : function() {
						$.mobile.loading("hide");
					},
					dataType : "html",
				});
			}

var app = {
	// Application Constructor
	initialize : function() {

		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {

		//document.addEventListener("deviceready", this.splashScreen, false);
	},

	splashScreen : function() {
		//navigator.splashscreen.hide();
	}
};